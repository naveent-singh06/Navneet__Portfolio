import { useEffect, useRef } from 'react';
import { ParticleCanvas } from './ParticleCanvas';
import { useIsTouch, useReducedMotion } from '../hooks/useMediaQuery';

/** The hero's `<canvas id="hero-canvas">` live network background. */
export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isTouch = useIsTouch();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const engine = new ParticleCanvas(canvas, { isTouch, reduceMotion });
    engine.start();
    return () => engine.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTouch, reduceMotion]);

  return <canvas id="hero-canvas" ref={canvasRef} />;
}
