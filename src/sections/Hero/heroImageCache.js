const IMAGE_COUNT = 286;
const FRAME_TEMPLATE = "zynedigix-hero-";

const SEQUENCES = {
  desktop: "/assets/images/hero_images/",
  mobile: "/assets/images/hero_mobile/",
};

function getFramePath(sequenceBase, frameNumber) {
  const paddedFrame = String(frameNumber).padStart(4, "0");
  return `${sequenceBase}${FRAME_TEMPLATE}${paddedFrame}.jpg`;
}

const cache = {
  activeSequence: null,
  images: {
    desktop: new Array(IMAGE_COUNT).fill(null),
    mobile: new Array(IMAGE_COUNT).fill(null),
  },
  // overall sequence preload promise
  preloadPromise: {
    desktop: null,
    mobile: null,
  },
  // per-frame promises to avoid duplicate requests
  preloadPromises: {
    desktop: new Array(IMAGE_COUNT).fill(null),
    mobile: new Array(IMAGE_COUNT).fill(null),
  },
  // per-frame retry counters
  retryCounts: {
    desktop: new Array(IMAGE_COUNT).fill(0),
    mobile: new Array(IMAGE_COUNT).fill(0),
  },
  loadedCount: {
    desktop: 0,
    mobile: 0,
  },
};

function selectSequenceByWidth(width) {
  // Keep breakpoint consistent with project expectations.
  // Use 1024px: <1024 => mobile/tablet, >=1024 => desktop/laptop
  return width >= 1024 ? "desktop" : "mobile";
}

function preloadSequence(sequence, onProgress) {
  if (!SEQUENCES[sequence]) {
    return Promise.reject(new Error("Unknown sequence"));
  }

  // If overall sequence preload already running, attach to it
  if (cache.preloadPromise[sequence]) {
    if (onProgress) {
      const percent = Math.round((cache.loadedCount[sequence] / IMAGE_COUNT) * 100);
      try { onProgress(Math.min(100, percent)); } catch (e) {}
    }
    return cache.preloadPromise[sequence];
  }

  cache.activeSequence = sequence;

  const PRIORITY_COUNT = 12;
  const BATCH_SIZE = 16;
  const BATCH_DELAY_MS = 60;
  const RETRY_LIMIT = 2;

  const images = cache.images[sequence];
  const promises = cache.preloadPromises[sequence];
  const retries = cache.retryCounts[sequence];

  let loaded = cache.loadedCount[sequence] || images.filter(Boolean).length || 0;
  let failed = 0;

  function reportProgress() {
    cache.loadedCount[sequence] = images.filter(Boolean).length;
    const percent = Math.round((cache.loadedCount[sequence] / IMAGE_COUNT) * 100);
    if (onProgress) {
      try { onProgress(Math.min(100, percent)); } catch (e) {}
    }
  }

  function loadFrame(index) {
    if (index < 0 || index >= IMAGE_COUNT) return Promise.resolve(null);

    // Already loaded
    if (images[index]) return Promise.resolve(images[index]);

    // Already loading
    if (promises[index]) return promises[index];

    const p = new Promise((resolve) => {
      const img = new Image();
      img.decoding = "async";
      img.src = getFramePath(SEQUENCES[sequence], index + 1);

      img.onload = () => {
        images[index] = img;
        loaded += 1;
        reportProgress();
        resolve(img);
      };

      img.onerror = () => {
        retries[index] = (retries[index] || 0) + 1;
        if (retries[index] <= RETRY_LIMIT) {
          // retry after short delay
          setTimeout(() => {
            promises[index] = null;
            resolve(loadFrame(index));
          }, 300 + retries[index] * 200);
          return;
        }

        // mark as failed but resolve gracefully
        images[index] = null;
        failed += 1;
        reportProgress();
        resolve(null);
      };
    });

    promises[index] = p;
    return p;
  }

  const overall = (async () => {
    // 1) Load priority frames first
    const priorityCount = Math.min(PRIORITY_COUNT, IMAGE_COUNT);
    const priorityIndices = [];
    for (let i = 0; i < priorityCount; i++) {
      if (!images[i]) priorityIndices.push(i);
    }

    await Promise.all(priorityIndices.map((i) => loadFrame(i)));

    // 2) Load remaining in batches
    const remainingIndices = [];
    for (let i = priorityCount; i < IMAGE_COUNT; i++) {
      if (!images[i]) remainingIndices.push(i);
    }

    for (let pos = 0; pos < remainingIndices.length; pos += BATCH_SIZE) {
      const batch = remainingIndices.slice(pos, pos + BATCH_SIZE);
      await Promise.all(batch.map((i) => loadFrame(i)));
      // small delay between batches to avoid request bursts
      await new Promise((res) => setTimeout(res, BATCH_DELAY_MS));
    }

    // Ensure all frames have some value (null or Image)
    const finalLoaded = images.filter(Boolean).length;
    cache.loadedCount[sequence] = finalLoaded;
    reportProgress();

    return { images, loaded: finalLoaded, failed };
  })();

  cache.preloadPromise[sequence] = overall;
  return overall;
}

function getCachedImages(sequence) {
  return cache.images[sequence] || [];
}

function getActiveSequence() {
  return cache.activeSequence;
}

export default {
  IMAGE_COUNT,
  selectSequenceByWidth,
  preloadSequence,
  getCachedImages,
  getActiveSequence,
};
