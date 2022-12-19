import { MdAdd } from "react-icons/md";
export const InputAddObject = (props) => {
  const { setGamestate } = props;

  const onClick = () => {
    setGamestate((prev) => {
      const index = prev[prev.length - 1].index + 1;
      prev.push({
        index,
        positionX: 0,
        positionY: 0,
        mass: 1,
        velocityX: 1,
        velocityY: 1,
      });
      return prev;
    });
  };
  return (
    <>
      <button type="button" className="btn btn-primary" onClick={onClick}>
        <MdAdd /> Add Element
      </button>
    </>
  );
};
