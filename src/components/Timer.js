import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/index.css";
// import alaram from "/images/alaram.wav";

const Timer = () => {
  const [showTime, setShowTime] = useState(10);
  const [btnActive, setBtnActive] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  //   console.log(state.timer);
  useEffect(() => {
    if (state && state.timer) {
      setShowTime(state.timer);
    } else {
      setShowTime(10);
    }
  }, [state]);
  const alaramSound = new Audio("/images/alaram.wav");

  const extractMinutes = () => {
    const currentTime = showTime;

    const currentMinutes = Math.floor(currentTime / 60);
    return currentMinutes;
  };

  const extractSeconds = () => {
    const currentTime = showTime;

    const currentSeconds = currentTime % 60;
    return currentSeconds;
  };

  const btnClick = () => {
    if (showTime === 0) {
      setBtnActive(false);
    } else {
      setBtnActive(!btnActive);
    }
  };
  const changeTime = () => {
    if (showTime > 0 && btnActive) {
      setShowTime((prevtime) => prevtime - 1);
    } else if (showTime === 0) {
      alaramSound.play();
    }
  };

  useEffect(() => {
    const intervalId = setInterval(changeTime, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [btnActive, showTime]);

  const resetShowTime = () => {
    console.log("hii");
    // setBtnActive(false);
    setShowTime(10);
  };
  return (
    <div className="main-container">
      <div className="container">
        <h1>POMODORO TIMER</h1>
        <h2>{`${extractMinutes()}:${extractSeconds()}`}</h2>
        <button
          className={`btn btn-${btnActive ? "danger" : "primary"} mx-2`}
          onClick={btnClick}
          value={btnActive}
        >
          <b>{btnActive ? "PAUSE" : "START"}</b>
        </button>
        <button
          className="btn btn-success mx-2"
          onClick={() => {
            resetShowTime(showTime);
          }}
        >
          <b>RESET</b>
        </button>
        <button
          className="btn btn-info mx-2 "
          onClick={() => {
            navigate("/customize");
          }}
        >
          <b>CUSTOMIZE</b>
        </button>
      </div>
    </div>
  );
};

export default Timer;
