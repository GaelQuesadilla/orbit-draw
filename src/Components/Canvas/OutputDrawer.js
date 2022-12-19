import { useCanvas } from "../../hooks/UseCanvas";
import { useFrames } from "../../hooks/useFrames";
import { usePlayFrame } from "../../hooks/usePlayFrame";

export const OutputDrawer = (props) => {
  const frame = useFrames(props.play, 10);
  const [canvasRef, contextRef] = useCanvas(props.width, props.height);
  const gamestate = usePlayFrame(
    frame,
    contextRef,
    canvasRef,
    props.gamestate,
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
