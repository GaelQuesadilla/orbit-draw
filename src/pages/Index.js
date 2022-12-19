import { useEffect } from "react";
import { GameScreen } from "../Components/Canvas/GameScreen";
import { Form } from "../Components/Input/Form";
import { UseStateUp } from "../hooks/UseStateUp";

export const Index = () => {
  const [width, setWidth, onChangeWidth] = UseStateUp(220);
  const [height, setHeight, onChangeHeight] = UseStateUp(220);
  const [frameRate, setFrameRate, onChangeFrameRate] = UseStateUp(30);
  const [steps, setSteps, onChangeSteps] = UseStateUp(0.2);
  const [gamestate, setGamestate, onChangeGamestate] = UseStateUp([
    {
      index: 0,
      positionX: 0,
      positionY: 0,
      mass: 1,
      velocityX: 1,
      velocityY: 1,
    },
  ]);

  useEffect(() => {
    console.debug("rendering");
    return () => {};
  });

  return (
    <>
      <div className="container-fluid">
        <Form
          width={width}
          height={height}
          onChangeHeight={onChangeHeight}
          onChangeWidth={onChangeWidth}
          {...{
            frameRate,
            onChangeFrameRate,
            steps,
            onChangeSteps,
            gamestate,
            setGamestate,
            onChangeGamestate,
          }}
        />
      </div>
      <div className="container-fluid">
        <GameScreen {...{ width, height, gamestate, setGamestate, steps }} />
      </div>
    </>
  );
};
