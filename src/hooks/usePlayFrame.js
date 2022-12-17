import { useState, useEffect, useRef } from "react";

export const usePlayFrame = (frame, contextRef, canvasRef) => {
  const gameState = useRef();
  useEffect(() => {
    console.debug("Rendering frame", { frame });
    const ctx = contextRef.current;
    ctx.fillStyle = "#002e";
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    return () => {};
  }, [frame]);
  return gameState;
};
