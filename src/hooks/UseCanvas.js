import { useEffect, useRef } from "react";

export const useCanvas = (width, height) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.height = height;
    canvas.width = width;

    const context = canvas.getContext("2d");
    context.linecap = "round";
    contextRef.current = context;

    return () => {};
  }, []);
  return [canvasRef, contextRef];
};
