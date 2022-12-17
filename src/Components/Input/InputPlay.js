export const InputPlay = (props) => {
  return (
    <>
      <div className="col">
        <input
          type="button"
          className="btn px-5 py-3 container-fluid btn-primary"
          value={props.play ? "Pause" : "Play"}
          onClick={props.onClick}
        />
      </div>
    </>
  );
};
