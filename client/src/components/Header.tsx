import React from "react";

export function Header() {
  return (
    <div 
      className="bg-[var(--bg-neutral)] rounded-xl p-8 mb-6"
      style={{ borderRadius: "var(--card-border-radius)" }}
    >
      <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--text-accent)" }}>
        Hi touch RGB
      </h1>
      <p style={{ color: "var(--text-strong)" }}>
        Hope you're doing well. This page is here to demonstrate the magic of design tokens
      </p>
    </div>
  );
}
