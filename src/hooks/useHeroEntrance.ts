import { useEffect, useState } from 'react';

/**
 * Replicates the preloader → hero entrance sequence: on window `load`,
 * wait 650ms, then hide the preloader and trigger the hero's staggered
 * entrance animation (`.hero-play` class).
 */
export function useHeroEntrance() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [heroPlaying, setHeroPlaying] = useState(false);

  useEffect(() => {
    let timeoutId: number;
    const onLoad = () => {
      timeoutId = window.setTimeout(() => {
        setPreloaderDone(true);
        setHeroPlaying(true);
      }, 650);
    };

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
    }
    return () => {
      window.removeEventListener('load', onLoad);
      window.clearTimeout(timeoutId);
    };
  }, []);

  return { preloaderDone, heroPlaying };
}
