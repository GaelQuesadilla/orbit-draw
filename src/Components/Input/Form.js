import { Header } from "../Headers/Header";
import { Input } from "./Input";
import { InputAddObject } from "./InputAddObject";
import { ObjectForm } from "./ObjectForm";

export const Form = (props) => {
  const { gamestate, setGamestate } = props;
  return (
    <>
      <form>
        <div className="container-sm bg-light mb-3 rounded">
          <Header>Screen</Header>
          <Input
            name="Width"
            value={props.width}
            onChangeValue={props.onChangeWidth}
          />
          <Input
            name="Height"
            value={props.height}
            onChangeValue={props.onChangeHeight}
          />
        </div>
        <div className="container-sm bg-light mb-3 rounded">
          <Header>Game </Header>
          <Input
            name="Steps"
            value={props.steps}
            onChangeValue={props.onChangeSteps}
          />
          <Input
            name="Frame-rate"
            value={props.frameRate}
            onChangeValue={props.onChangeFrameRate}
          />
        </div>

        <div className="container-sm bg-light mb-3 rounded">
          {gamestate.map((el, index) => (
            <ObjectForm
              id={index}
              gamestate={gamestate}
              setGamestate={setGamestate}
            />
          ))}
        </div>
        <div className="container-sm bg-light mb-3 rounded text-center py-3">
          <InputAddObject {...{ setGamestate }} />
        </div>
      </form>
    </>
  );
};
