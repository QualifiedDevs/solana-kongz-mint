import { useState } from "react";

const Timer = ({ children }) => {
  const endTime = process.env.REACT_APP_CANDY_START_DATE;
  const getTime = () => endTime - Date.now();

  const [time, setTime] = useState(getTime());

  const updateTimer = () => {
    setTime(getTime());
  };

  setInterval(updateTimer, 1000);

  const getFormattedTime = () => {
    const days = Math.floor(time / (24 * 60 * 60 * 1000));
    const hours = Math.floor((time % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (60 * 60 * 1000)) / (1000 * 60));
    const seconds = Math.floor((time % (60 * 1000)) / 1000);

    return `${days} : ${hours} : ${minutes} : ${seconds}`;
  };

  return <>{time <= 0 ? children : <p className="timer-text">{getFormattedTime()}</p>}</>;
  //If time is <= 0 return children, otherwise return timer!
};

export default Timer;

//  Timer needs to accept children.
// The children is gonna be function components. Can I get more specific?
