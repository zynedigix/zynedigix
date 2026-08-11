import { useState, useEffect, useRef } from "react";
import heroCache from "./heroImageCache";

export default function useHeroPreloader() {
  const [loadedPercentage, setLoadedPercentage] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const imagesRef = useRef([]);
  const sequenceRef = useRef(null);

  useEffect(() => {
    // If images already provided by cache for the active sequence, reuse.
    const width = typeof window !== "undefined" ? window.innerWidth : 1200;
    const sequence = heroCache.selectSequenceByWidth(width);
    sequenceRef.current = sequence;

    const cached = heroCache.getCachedImages(sequence);

    // If cached array contains loaded images, reuse them immediately
    const hasAny = cached.some(Boolean);
    if (hasAny) {
      imagesRef.current = cached;
      const loadedCount = cached.filter(Boolean).length;
      setLoadedPercentage(Math.round((loadedCount / heroCache.IMAGE_COUNT) * 100));
      setIsReady(loadedCount >= heroCache.IMAGE_COUNT && cached.every(Boolean));
      // Kick off background preload for any missing frames
      heroCache.preloadSequence(sequence, (p) => setLoadedPercentage(p)).then(({ images }) => {
        imagesRef.current = images;
        const allLoaded = images.every(Boolean);
        setIsReady(allLoaded);
      });
      return undefined;
    }

    // No cached frames — start preload
    heroCache.preloadSequence(sequence, (p) => setLoadedPercentage(p)).then(({ images }) => {
      imagesRef.current = images;
      const allLoaded = images.every(Boolean);
      setIsReady(allLoaded);
    });

    // listen for viewport category changes (desktop <-> mobile)
    const handleResize = () => {
      const newSeq = heroCache.selectSequenceByWidth(window.innerWidth);
      if (newSeq !== sequenceRef.current) {
        sequenceRef.current = newSeq;
        const cachedNew = heroCache.getCachedImages(newSeq);
        if (cachedNew.some(Boolean)) {
          imagesRef.current = cachedNew;
          const loadedCount = cachedNew.filter(Boolean).length;
          setLoadedPercentage(Math.round((loadedCount / heroCache.IMAGE_COUNT) * 100));
          setIsReady(loadedCount >= heroCache.IMAGE_COUNT && cachedNew.every(Boolean));
        } else {
          heroCache.preloadSequence(newSeq, (p) => setLoadedPercentage(p)).then(({ images }) => {
            imagesRef.current = images;
            const allLoaded = images.every(Boolean);
            setIsReady(allLoaded);
          });
        }
      }
    };

    let resizeTimer = null;
    const debounced = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 200);
    };

    window.addEventListener("resize", debounced);

    return () => {
      window.removeEventListener("resize", debounced);
      clearTimeout(resizeTimer);
    };
  }, []);

  return {
    loadedPercentage,
    isReady,
    images: imagesRef.current,
    totalFrames: heroCache.IMAGE_COUNT,
    finalFrameIndex: heroCache.IMAGE_COUNT - 1,
  };
}
