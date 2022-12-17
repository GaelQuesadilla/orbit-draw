import { useState } from "react";

export const UseStateUp = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (newValue) => {
    setValue(newValue);
  };
  return [value, setValue, onChange];
};
