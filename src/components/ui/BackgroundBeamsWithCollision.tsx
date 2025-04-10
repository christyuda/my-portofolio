"use client";
import React from "react";

export const BackgroundBeamsWithCollision = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 bg-gradient-to-r from-purple-600 via-violet-500 to-pink-500 blur-3xl animate-pulse" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
