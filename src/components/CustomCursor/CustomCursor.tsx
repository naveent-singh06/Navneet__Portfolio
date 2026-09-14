import { useRef } from 'react';
import './CustomCursor.css';
import { useCustomCursor } from '../../hooks/useCustomCursor';

/** The custom cursor dot + trailing ring (hidden on touch devices). */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  useCustomCursor(dotRef, ringRef);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
