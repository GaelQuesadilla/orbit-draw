
export const Input = (props) => {
  const { value, onChangeValue, name } = props;

  return (
    <div className="input-group py-2 row">
      <label for={name} className="form-label">
        {name}
      </label>
      <br />
      <div className="col col-sm">
        <input
          id={name}
          className="form-control col-sm container-fluid"
          type="number"
          value={value}
          onChange={(e) => onChangeValue(e.target.value)}
        />
      </div>
    </div>
  );
};
