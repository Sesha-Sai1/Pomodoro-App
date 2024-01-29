import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CustomizeTimer = () => {
  const [handleInput, setHandleInput] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();
  const takeInput = (e) => {
    setHandleInput(e.target.value);
    setTime(e.target.value);
  };
  const clearInput = () => {
    setHandleInput("");
  };
  const moveToTimer = () => {
    if (handleInput.length === 0) {
      alert("Please enter the Input");
    } else {
      const timer = parseInt(time);
      navigate("/timer", { state: { timer } });
    }
  };
  return (
    <>
      <div className="main-container">
        <div className="container">
          <h1>CUSTOMIZE TIMER</h1>
          <h3>Set Timer(In Seconds)</h3>
          <input
            onChange={(e) => {
              takeInput(e);
            }}
            value={handleInput}
            type="number"
            placeholder="Enter Seconds to start"
            size={50}
          />
          <div style={{ marginTop: "10px" }}>
            <button onClick={clearInput} className="mx-2 btn btn-primary">
              CLEAR
            </button>
            <button
              onClick={() => {
                navigate("/timer");
              }}
              className="mx-2 btn btn-danger"
            >
              CANCEL
            </button>
            <button onClick={moveToTimer} className="mx-2 btn btn-success">
              SAVE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomizeTimer;
