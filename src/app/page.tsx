'use client';
import { useState } from 'react';
import CubeScene from '@/components/CubeScene';

export default function Home() {
  const [n, setN] = useState(20);
  const [resetKey, setResetKey] = useState(0);

  const handleResetView = () => {
    setResetKey(prevKey => prevKey + 1);
  };

  return (
    <main className="relative h-full w-full bg-background text-foreground">
      <div className="absolute inset-0 z-0">
        <CubeScene n={n} resetKey={resetKey} />
      </div>
      <div className="relative z-10 flex h-screen items-center justify-start p-4 sm:p-8 md:p-12 lg:p-24 pointer-events-none">
        <div className="bg-blue-800/30 backdrop-blur-lg rounded-xl shadow-2xl p-6 sm:p-8 max-w-md text-foreground pointer-events-auto">
          <div className="text-center mb-6">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-primary to-accent">
              Hello Cube
            </h1>
            <p className="text-base sm:text-lg text-foreground">
              Interact with the 3D scene
            </p>
          </div>
          <div className="w-full mx-auto">
            <label htmlFor="n-slider" className="block text-center mb-2">
              Number of Cubes: <span className="font-bold text-lg">{n}x{n}={n*n}</span>
            </label>
            <input
              id="n-slider"
              type="range"
              min="1"
              max="100"
              value={n}
              onChange={(e) => setN(Number(e.target.value))}
              className="w-full h-3 bg-primary rounded-full appearance-none cursor-pointer range-lg accent-foreground"
            />
            <button
              onClick={handleResetView}
              className="border border-white bg-accent mt-4 rounded-full w-full text-primary-foreground font-semibold py-2 px-4 hover:brightness-125 hover:scale-108 transition-all active:scale-95 pointer-events-auto shadow-md"
            >
              Reset View
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}