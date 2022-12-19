import { useEffect, useRef } from "react";

export const useCanvas = (width, height) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.height = height;
    canvas.width = width;

    const ctx = canvas.getContext("2d");
    ctx.linecap = "round";
    contextRef.current = ctx;
    ctx.fillStyle = "#002";
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    return () => {};
  }, [width, height]);
  return [canvasRef, contextRef];
};
