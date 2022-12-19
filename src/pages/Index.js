import { useEffect } from "react";
import { GameScreen } from "../Components/Canvas/GameScreen";
import { Form } from "../Components/Input/Form";
import { UseStateUp } from "../hooks/UseStateUp";

export const Index = () => {
  const [width, setWidth, onChangeWidth] = UseStateUp(250);
  const [height, setHeight, onChangeHeight] = UseStateUp(250);
  const [frameRate, setFrameRate, onChangeFrameRate] = UseStateUp(30);
  const [steps, setSteps, onChangeSteps] = UseStateUp(0.5);
  const [gamestate, setGamestate, onChangeGamestate] = UseStateUp([
    {
      index: 0,
      positionX: 125,
      positionY: 125,
      mass: 100,
      velocityX: 0,
      velocityY: 0,
    },
    {
      index: 1,
      positionX: 175,
      positionY: 130,
      mass: 1,
      velocityX: 0,
      velocityY: 1.414,
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
        <GameScreen
          {...{ width, height, gamestate, setGamestate, steps, frameRate }}
        />
      </div>
    </>
  );
};
