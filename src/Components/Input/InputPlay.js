import { MdPlayArrow as Play, MdPause as Pause } from "react-icons/md";
export const InputPlay = (props) => {
  return (
    <>
      <div className="col p-3 mt-0">
        <button
          type="button"
          className="btn px-5 py-3 container-fluid btn-primary"
          onClick={props.onClick}
        >
          {props.play ? (
            <>
              <Pause />
              Pause
            </>
          ) : (
            <>
              <Play />
              Play
            </>
          )}
        </button>
      </div>
    </>
  );
};
