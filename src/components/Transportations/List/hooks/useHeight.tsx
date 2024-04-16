import { useEffect, useRef, useState } from "react";

export const useHeight = () => {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeight(ref?.current?.clientHeight || 0);
  });

  return {
    height,
    ref,
  };
};
