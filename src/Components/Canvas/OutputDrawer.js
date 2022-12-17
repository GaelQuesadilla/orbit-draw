import { useEffect, useRef, useState } from "react";
import { useCanvas } from "../../hooks/UseCanvas";
import { useFrames } from "../../hooks/useFrames";
import { usePlayFrame } from "../../hooks/usePlayFrame";

export const OutputDrawer = (props) => {
  const frame = useFrames(props.play, 10);
  const [canvasRef, contextRef] = useCanvas(props.width, props.height);
  const gamestate = usePlayFrame(frame, contextRef, canvasRef);

  return (
    <>
      <div className="col">
        <canvas id="canvas" ref={canvasRef} />
      </div>
    </>
  );
};
