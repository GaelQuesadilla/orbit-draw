import { useEffect } from "react";
import { Header } from "../Headers/Header";
import { Input } from "./Input";

export const ObjectForm = (props) => {
  const { id, gamestate, setGamestate } = props;

  return (
    <>
      <Header>Object {id}</Header>
      <Input
        name="Velocity X"
        value={gamestate[id].velocityX}
        onChangeValue={(newValue) =>
          setGamestate((prev) => {
            prev[id].velocityX = Number(newValue);
            return [...prev];
          })
        }
      />
      <Input
        name="Velocity Y"
        value={gamestate[id].velocityY}
        onChangeValue={(newValue) =>
          setGamestate((prev) => {
            prev[id].velocityY = Number(newValue);
            return [...prev];
          })
        }
      />
      <Input
        name="Position X"
        value={gamestate[id].positionX}
        onChangeValue={(newValue) =>
          setGamestate((prev) => {
            prev[id].positionX = Number(newValue);
            return [...prev];
          })
        }
      />
      <Input
        name="Position Y"
        value={gamestate[id].positionY}
        onChangeValue={(newValue) =>
          setGamestate((prev) => {
            prev[id].positionY = Number(newValue);
            return [...prev];
          })
        }
      />
      <Input
        name="Mass"
        value={gamestate[id].mass}
        onChangeValue={(newValue) =>
          setGamestate((prev) => {
            prev[id].mass = Number(newValue);
            return [...prev];
          })
        }
      />
    </>
  );
};
