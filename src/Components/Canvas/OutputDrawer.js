import { useCanvas } from "../../hooks/UseCanvas";
import { useFrames } from "../../hooks/useFrames";
import { usePlayFrame } from "../../hooks/usePlayFrame";

export const OutputDrawer = (props) => {
  const frame = useFrames(props.play, props.frameRate);
  const [canvasRef, contextRef] = useCanvas(props.width, props.height);
  const gamestate = usePlayFrame(
    frame,
    contextRef,
    canvasRef,
    props.gamestate,
    props.setGamestate,
    props.steps
  );

  return (
    <>
      <div className="col p-5 mx-0 mx-0 text-center ">
        <canvas className="mx-auto" id="canvas" ref={canvasRef} />
      </div>
    </>
  );
};
