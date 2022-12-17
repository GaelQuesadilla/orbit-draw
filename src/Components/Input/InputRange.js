export const Range = (props) => {
  const { value, onChangeValue, name } = props;

  return (
    <div>
      <label for={name} className="form-label">
        {name}: {value}
      </label>
      <br />
      <input
        id={name}
        className="form-range"
        type="range"
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        min={props.min}
        max={props.max}
      />
      <br />
      <span className="minmax" for={name}>
        min: {props.min}, max:{props.max}
      </span>
    </div>
  );
};
