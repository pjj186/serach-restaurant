import React, { useState } from "react";
import useInterval from "../hooks/useInterval";

const Clock = () => {
  let today = new Date();
  let localTime = today.toLocaleTimeString();
  const [time, setTime] = useState(`${localTime}`);

  useInterval(() => {
    setTime(`${localTime}`);
  }, 1000);
  return <span>{time}</span>;
};

export default Clock;
