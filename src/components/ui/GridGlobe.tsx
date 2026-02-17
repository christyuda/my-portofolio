"use client";

const GridGlobe = () => {
  return (
    <div className="flex items-center justify-center absolute -left-5 top-36 md:top-40 w-full h-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="relative h-44 w-44 rounded-full bg-gradient-to-br from-cyan-400/30 via-blue-500/25 to-indigo-500/30 blur-[1px]" />
          <div className="absolute h-52 w-52 rounded-full border border-cyan-300/30" />
          <div className="absolute h-64 w-64 rounded-full border border-blue-400/20" />
        </div>
      </div>
    </div>
  );
};

export default GridGlobe;
