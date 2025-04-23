import React from "react";
import { Header } from "@/components/Header";
import { ButtonsCard } from "@/components/ButtonsCard";
import { ChartCard } from "@/components/ChartCard";
import { DataCard } from "@/components/DataCard";
import { MediaPlayerCard } from "@/components/MediaPlayerCard";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-4xl w-full">
        <Header />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ButtonsCard />
          <ChartCard />
          <DataCard />
          <MediaPlayerCard />
        </div>
      </div>
    </div>
  );
}
