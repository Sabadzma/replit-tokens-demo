import React from "react";

export function DataCard() {
  return (
    <div 
      className="rounded-xl p-8"
      style={{ 
        backgroundColor: "var(--bg-neutral)",
        borderRadius: "var(--card-border-radius)"
      }}
    >
      <div 
        className="h-36 rounded-lg mb-4"
        style={{ 
          backgroundColor: "var(--bg-accent)",
          borderRadius: "0.5rem"
        }}
      ></div>
      <h2 style={{ color: "var(--text-accent)" }}>This is a card</h2>
    </div>
  );
}
