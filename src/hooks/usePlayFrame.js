import { useEffect, useState } from "react";

export const usePlayFrame = (
  frame,
  contextRef,
  canvasRef,
  gamestate,
  setGamestate,
  steps
) => {
  useEffect(() => {
    console.debug("Rendering frame:", frame);
    const ctx = contextRef.current;
    ctx.fillStyle = "#00002010";
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    ctx.fillStyle = "#fff";
    let newGamestate = gamestate;
    for (let i = 0; i < newGamestate.length; i++) {
      let object = newGamestate[i];

      let objAcceleration = [0, 0];
      for (let j = 0; j < newGamestate.length; j++) {
        if (j === i) {
          continue;
        }
        const interactionObject = gamestate[j];
        // Calc distance in x, y and total using Pitagoras
        const distanceX = object.positionX - interactionObject.positionX;

        const distanceY = object.positionY - interactionObject.positionY;

        const cuadraticDistance = distanceX ** 2 + distanceY ** 2;
        const distance = cuadraticDistance ** 0.5;

        // Calc acceleration using similar triangles
        let acceleracion = interactionObject.mass / cuadraticDistance;
        objAcceleration[0] += (-acceleracion * distanceX) / distance;
        objAcceleration[1] += (-acceleracion * distanceY) / distance;
      }
      // Calc velocity with new acceleration

      object.velocityX += objAcceleration[0] * steps;
      object.velocityY += objAcceleration[1] * steps;

      //Calc new positions
      object.positionX += object.velocityX * steps;
      object.positionY += object.velocityY * steps;
      // Draw element

      ctx.beginPath();
      ctx.arc(object.positionX, object.positionY, 5, 0, 2 * Math.PI);
      ctx.fill();
    }

    contextRef.current = ctx;
    // Save new gamestate
    setGamestate(() => newGamestate);
    return () => {};
  }, [frame]);

  return gamestate;
};
