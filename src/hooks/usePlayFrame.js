import { useEffect } from "react";

export const usePlayFrame = (
  frame,
  contextRef,
  canvasRef,
  gamestate,
  steps
) => {
  useEffect(() => {
    console.debug("Rendering frame", { frame });
    const ctx = contextRef.current;
    ctx.fillStyle = "#002";
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    ctx.fillStyle = "#fff";

    for (let i = 0; i < gamestate.length; i++) {
      let object = { ...gamestate[i] };

      ctx.beginPath();
      console.debug(object.positionX, object.positionY);
      ctx.arc(object.positionX, object.positionY, 5, 0, 2 * Math.PI);
      ctx.fill();
    }

    contextRef.current = ctx;
    return () => {};
  }, [frame]);
  return gamestate;
};
