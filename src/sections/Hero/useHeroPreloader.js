import { useState, useEffect, useRef } from "react";

const IMAGE_COUNT = 286;
const FRAME_TEMPLATE = "zynedigix-hero-";

function getFrameAssetPath(frameNumber) {
  const paddedFrame = String(frameNumber).padStart(4, "0");
  return new URL(`../../assets/images/hero_images/${FRAME_TEMPLATE}${paddedFrame}.jpg`, import.meta.url).href;
}

export default function useHeroPreloader() {
  const [loadedPercentage, setLoadedPercentage] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const imagesRef = useRef([]);

  useEffect(() => {
    if (imagesRef.current.length > 0) {
      return undefined;
    }

    const totalFrames = IMAGE_COUNT;
    const images = new Array(totalFrames).fill(null);
    imagesRef.current = images;

    let loadedCount = 0;
    let failedCount = 0;

    const startLoad = (index) => {
      if (index >= totalFrames) {
        if (loadedCount >= totalFrames && failedCount === 0) {
          setIsReady(true);
        } else if (loadedCount >= totalFrames) {
          setIsReady(false);
        }
        return;
      }

      const image = new Image();
      image.decoding = "async";
      image.src = getFrameAssetPath(index + 1);

      image.onload = () => {
        images[index] = image;
        loadedCount += 1;

        const percent = Math.round((loadedCount / totalFrames) * 100);
        setLoadedPercentage(Math.min(100, percent));

        if (loadedCount >= totalFrames) {
          const allLoaded = images.every(Boolean);
          setIsReady(allLoaded);
        }

        if (index < totalFrames - 1) {
          startLoad(index + 1);
        }
      };

      image.onerror = () => {
        images[index] = null;
        failedCount += 1;
        loadedCount += 1;

        const percent = Math.round((loadedCount / totalFrames) * 100);
        setLoadedPercentage(Math.min(100, percent));

        if (loadedCount >= totalFrames) {
          const allLoaded = images.every(Boolean);
          setIsReady(allLoaded);
        }

        if (index < totalFrames - 1) {
          startLoad(index + 1);
        }
      };
    };

    startLoad(0);

    return undefined;
  }, []);

  return {
    loadedPercentage,
    isReady,
    images: imagesRef.current,
    totalFrames: IMAGE_COUNT,
    finalFrameIndex: IMAGE_COUNT - 1,
  };
}
