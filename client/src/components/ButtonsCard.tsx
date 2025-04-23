import React from "react";

export function ButtonsCard() {
  return (
    <div 
      className="rounded-xl p-8"
      style={{ 
        backgroundColor: "var(--bg-neutral)",
        borderRadius: "var(--card-border-radius)"
      }}
    >
      <h2 
        className="text-xl font-semibold mb-4"
        style={{ color: "var(--text-accent)" }}
      >
        Buttons
      </h2>
      <div className="flex gap-4">
        <button
          className="rounded px-6 py-2 font-medium"
          style={{
            backgroundColor: "var(--bg-accent)",
            color: "var(--text-light)",
            borderRadius: "0.375rem"
          }}
        >
          Primary
        </button>
        <button
          className="rounded px-6 py-2 font-medium"
          style={{
            backgroundColor: "var(--bg-neutral)",
            color: "var(--text-strong)",
            borderRadius: "0.375rem"
          }}
        >
          Secondary
        </button>
      </div>
    </div>
  );
}
