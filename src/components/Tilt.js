import React, { useRef } from "react";

export default function Tilt({ className, children }) {
  const ref = useRef(null);

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";
    }
  };

  const onMove = (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const node = ref.current;
    if (!node) return;
    const box = node.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    node.style.transform = `rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 9).toFixed(2)}deg) translateZ(8px)`;
  };

  return (
    <div className="tilt-frame">
      <div ref={ref} className={`tilt-inner ${className || ""}`} onMouseMove={onMove} onMouseLeave={reset}>
        {children}
      </div>
    </div>
  );
}
