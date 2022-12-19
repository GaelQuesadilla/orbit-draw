import { MdRestartAlt as Restart } from "react-icons/md";
export const InputRestart = (props) => {
  const onClick = () => {};
  return (
    <>
      <div className="col p-3 ">
        <button
          type="button"
          className="btn btn-danger px-5 py-3 container-fluid"
          onClick={onClick}
        >
          <Restart />
          Restart
        </button>
      </div>
    </>
  );
};
