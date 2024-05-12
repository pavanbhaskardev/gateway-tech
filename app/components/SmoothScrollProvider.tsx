"use client";
import React from "react";
import ReactLenis from "@studio-freight/react-lenis";

const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis root options={{ lerp: 0.075, duration: 2 }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrollProvider;
