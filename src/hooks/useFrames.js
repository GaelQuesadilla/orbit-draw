import { useEffect, useRef, useState } from "react";

export const useFrames = (play, frameRate) => {
  const [frame, setFrame] = useState(0);
  const intervalRef = useRef(null);
  useEffect(() => {
    clearInterval(intervalRef.current);
    if (play) {
      intervalRef.current = setInterval(() => {
        setFrame((prev) => prev + 1);
      }, 1000 / frameRate);
    }

    return () => {};
  }, [play, frameRate]);
  return frame;
};
