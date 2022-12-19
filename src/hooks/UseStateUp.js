import { useState } from "react";

export const UseStateUp = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (newValue) => {
    setValue(newValue);
  };

  const setValueUp = (f) => {
    setValue((prev) => f(prev));
  };

  return [value, setValueUp, onChange];
};
