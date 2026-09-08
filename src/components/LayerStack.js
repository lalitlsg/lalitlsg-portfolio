import React from "react";

const layers = [
  { label: "Next.js", depth: 0 },
  { label: "SSR / SDUI", depth: 1 },
  { label: "Auth", depth: 2 },
  { label: "WebView", depth: 3 },
];

export default function LayerStack() {
  return (
    <div className="scene" aria-hidden="true">
      <div className="stack">
        {layers.map((layer) => (
          <div className="plane" key={layer.label} style={{ "--d": layer.depth }}>
            <span>{layer.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
