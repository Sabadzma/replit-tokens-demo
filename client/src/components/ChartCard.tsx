import React from "react";

export function ChartCard() {
  return (
    <div 
      className="rounded-xl p-8"
      style={{ 
        backgroundColor: "var(--bg-neutral)",
        borderRadius: "var(--card-border-radius)"
      }}
    >
      <div className="h-40 flex items-end gap-2 justify-around mb-4">
        {/* Chart bars with varying heights */}
        <div className="chart-bar h-full w-4 rounded-t-lg"></div>
        <div className="chart-bar h-1/3 w-4 rounded-t-lg"></div>
        <div className="chart-bar h-2/5 w-4 rounded-t-lg"></div>
        <div className="chart-bar h-1/4 w-4 rounded-t-lg"></div>
        <div className="chart-bar h-2/3 w-4 rounded-t-lg"></div>
        <div className="chart-bar h-4/5 w-4 rounded-t-lg"></div>
        <div className="chart-bar h-2/5 w-4 rounded-t-lg"></div>
        <div className="chart-bar h-1/2 w-4 rounded-t-lg"></div>
      </div>
      <h2 style={{ color: "var(--text-accent)" }}>This is a chart</h2>
    </div>
  );
}
