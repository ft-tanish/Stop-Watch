import "./styles.css";
import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0 });

  useEffect(() => {
    handleTimmer();
    return () => clearInterval(id.current);
  }, []);

  let id = useRef();

  const handleTimmer = () => {
    id.current = setInterval(() => {
      setTime((prev) => {
        if (prev.sec == 60) {
          return { ...prev, min: prev.min + 1, sec: 0 };
        }
        if (prev.min == 60) {
          return { ...prev, hr: prev.hr + 1, min: 0, sec: 0 };
        }
        return { ...prev, sec: prev.sec + 1 };
      });
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(id.current);
    setTime({ hr: 0, min: 0, sec: 0 });
  };

  const twoDigit = (value) =>
    value.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false
    });

  return (
    <div className="App">
      <h1>
        {twoDigit(time.hr)}:{twoDigit(time.min)}:{twoDigit(time.sec)}
      </h1>
      <button onClick={() => handleTimmer()}>Start</button>
      <button onClick={() => clearInterval(id.current)}>Pause</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
