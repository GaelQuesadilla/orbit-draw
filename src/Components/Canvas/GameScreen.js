import { InputPlay } from "../Input/InputPlay";
import { OutputDrawer } from "./OutputDrawer";
import { useState } from "react";

export const GameScreen = (props) => {
  const [play, setPlay] = useState(false);
  const onClickPlay = () => setPlay((prev) => !prev);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col" />
        <OutputDrawer play={play} width={props.width} height={props.height} />
        <div className="col" />
      </div>
      <div className="row">
        <div className="col" />
        <InputPlay play={play} onClick={onClickPlay} />
        <div className="col" />
      </div>
    </div>
  );
};
