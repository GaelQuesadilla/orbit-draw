import { InputPlay } from "../Input/InputPlay";
import { OutputDrawer } from "./OutputDrawer";
import { useState } from "react";
import { InputRestart } from "../Input/InputRestart";

export const GameScreen = (props) => {
  const [play, setPlay] = useState(false);
  const onClickPlay = () => setPlay((prev) => !prev);
  return (
    <div className="container container-sm bg-light rounded">
      <div className="row ">
        <OutputDrawer
          play={play}
          width={props.width}
          height={props.height}
          gamestate={props.gamestate}
          steps={props.steps}
        />
      </div>
      <div className="row">
        <InputPlay play={play} onClick={onClickPlay} />
        <InputRestart />
      </div>
    </div>
  );
};
