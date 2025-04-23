import React from "react";
import { Play } from "lucide-react";

export function MediaPlayerCard() {
  // Create an array of 18 markers for the player
  const markers = Array.from({ length: 18 }, (_, i) => i);

  return (
    <div 
      className="rounded-xl p-8"
      style={{ 
        backgroundColor: "var(--bg-neutral)",
        borderRadius: "var(--card-border-radius)"
      }}
    >
      <div className="flex items-center gap-4">
        <button
          className="rounded-full h-12 w-12 flex items-center justify-center"
          style={{
            backgroundColor: "var(--bg-accent)",
            color: "var(--text-light)"
          }}
        >
          <Play size={24} />
        </button>
        
        {/* Progress bar with markers */}
        <div 
          className="w-full h-3 rounded-full relative flex items-center"
          style={{ backgroundColor: "var(--bg-subtle)" }}
        >
          {/* Markers */}
          <div className="absolute w-full flex justify-between px-1">
            {markers.map((index) => (
              <span
                key={index}
                className="h-4 w-0.5"
                style={{ backgroundColor: "var(--progress-marker-color)" }}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
