import React from "react";
import { SettingsContext } from "../../providers/SettingsProvider";
import CircularProgressBar from "../CircularBar/CircularBar";
export const Timer = () => {
  const { time, currentTab, setCurrentTab, setTime, totalTime, setTotalTime } =
    React.useContext(SettingsContext);
  const minutes = Math.floor(time[currentTab] / 60);
  const seconds = Math.floor(time[currentTab] % 60);
  const fullTime = `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
  const [percentage, setPercentage] = React.useState(100);
  const [status, setStatus] = React.useState("idle");
  React.useEffect(() => {
    if (status === "playing") {
      const interval = setInterval(() => {
        if (time[currentTab] === 0) {
          // if the time is 0 go ahead and change the tab and timer
          // if it's the last tab, reset the time
          if (currentTab === "pomodoro") {
            setCurrentTab("shortBreak");
          } else if (currentTab === "shortBreak") {
            setCurrentTab("longBreak");
          } else if (currentTab === "longBreak") {
            setCurrentTab("pomodoro");
            //   setTime((prev) => {
            //     return {
            //      pomodoro: totalTime.pomodoro,
            //         shortBreak: totalTime.shortBreak,
            //         longBreak: totalTime.longBreak,
            //     };
            //   })
            setStatus("finished");
          }
        } else {
          //if the time is not 0
          // decrement the time and set the procentage accordingly

          setTime((prev) => {
            if (prev[currentTab] === 0) {
              return prev;
            }

            return {
              ...prev,
              [currentTab]: prev[currentTab] - 1,
            };
          });
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  });
  React.useEffect(() => {
    const percentage = (time[currentTab] / totalTime[currentTab]) * 100;
    setPercentage(percentage);
  }, [time, totalTime, currentTab]);
  function handleTime() {
    if (status === "idle") {
      setStatus("playing");
    } else if (status === "finished") {
      setStatus("idle");
      setTime({
        pomodoro: totalTime.pomodoro,
        shortBreak: totalTime.shortBreak,
        longBreak: totalTime.longBreak,
      });
    } else {
      setStatus("idle");
    }
  }
  return (
    <div className="main-circle">
      <div className="inner-circle">
        <div className="colored-circle">
          <h1 className="timer">{fullTime}</h1>
          <button style={{ zIndex: 20 }} onClick={handleTime}>
            {status === "idle"
              ? "Start"
              : status === "finished"
              ? "Restart"
              : "Pause"}
          </button>
          <CircularProgressBar
            size={340}
            strokeWidth={15}
            percentage={percentage}
          />
        </div>
      </div>
      
    </div>
  );
};
