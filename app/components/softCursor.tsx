// components/SoftCursor.jsx
"use client";
import { useEffect, useRef } from "react";

export default function SoftCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;

    const moveCursor = (e: { clientX: number; clientY: number; }) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateCursor = () => {
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
      requestAnimationFrame(updateCursor);
    };

    document.addEventListener("mousemove", moveCursor);
    requestAnimationFrame(updateCursor);

    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className=" hidden lg:block fixed top-0 left-0 w-6 h-6 bg-white/20 backdrop-blur rounded-full pointer-events-none z-50 transition-transform duration-300 ease-out"
    ></div>
  );
}
