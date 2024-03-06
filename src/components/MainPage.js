import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/index.css";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div
        className="row "
        style={{
          backgroundImage: "url(./Images/bg1.jpg)",
          height: "100vh",
        }}
      >
        <div className="col-sm-12 col-lg-8 col-md-6 align-middle my-5 text-center">
          <img src="./Images/tomato.png" className="w-50 h-75" />
        </div>
        <div
          className="col-sm-12 col-lg-4 col-md-6"
          id="matter"
          // style={{ marginTop: "230px" }}
        >
          <h1>POMODORO TIMER</h1>
          <p>
            <b>Hii To use Pomodoro Timer get started...!</b>
          </p>
          <button
            onClick={() => {
              navigate("/timer");
            }}
            className="btn btn-primary"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
