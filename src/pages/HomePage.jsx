import { useState } from "react";
import logo from "../assets/images/logo.png";

const HomePage = () => {
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(59);
  const [isStarted, setIsStarted] = useState(false);
  const [currentHours, setCurrentHours] = useState(new Date().getHours());
  const [currentMinutes, setCurrentMinutes] = useState(new Date().getMinutes());

  console.log(currentHours);
  console.log(currentMinutes);

  function secondsOnClick() {
    setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);
  }

  function minutesOnClick() {
    setInterval(() => {
      setMinutes(minutes - 1);
    }, 1000 * 60);
  }

  return (
    <div className="home-page">
      <div className="technique-pomodoro">
        <img src={logo} className="logo" />
        <h1>
          THE <span>POMODORO</span> TECHNIQUE
        </h1>
      </div>
      <div className="timer">
        {!isStarted && (
          <div className="pomodoro-slot">
            <div>25</div>
            <div>:</div>
            <div>00</div>
          </div>
        )}
        {isStarted && (
          <div className="pomodoro-slot">
            <div>{minutes}</div>
            <div>:</div>
            <div>{seconds}</div>
          </div>
        )}
        {isStarted && (
          <div className="finish-time">
            <i className="fas fa-bell"></i>
            <div>
              <div>{currentHours}</div>
              <div>:</div>
              <div>{currentMinutes + 25}</div>
            </div>
          </div>
        )}
      </div>
      <div className="timer-buttons">
        {!isStarted && <button className="cancel-button-off">Cancel</button>}
        {isStarted && <button className="pause-button">Pause</button>}
        <button
          className="start-button"
          onClick={() => {
            setIsStarted(true);
            secondsOnClick();
            minutesOnClick();
          }}
        >
          {" "}
          Start
        </button>
      </div>
      <div className="horizontal-line"></div>
    </div>
  );
};

export default HomePage;
