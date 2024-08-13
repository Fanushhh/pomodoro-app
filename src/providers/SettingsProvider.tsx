
import React from "react";



export const SettingsContext = React.createContext();

function SettingsProvider({children}){

    const [time, setTime] = React.useState({
        pomodoro: 0.1 * 60,
        shortBreak: 0.1 * 60,
        longBreak: 0.1 * 60,
      });
      const [totalTime, setTotalTime] = React.useState({
        pomodoro:time.pomodoro || 25 * 60,
        shortBreak: time.shortBreak || 5 * 60,
        longBreak: time.longBreak || 15 * 60,
      });
      const [preferences, setPreferences] = React.useState({
        font: "Kumbh",
        color: "red",
      });
      const [currentTab, setCurrentTab] = React.useState("pomodoro");
      
      const handleChange = (e: Event) => {
        setTime((prev) => ({
          ...prev,
          [e.target.name]: e.target.value * 60,
        }));
        setTotalTime((prev) => {
          return {
            ...prev,
            [e.target.name]: e.target.value * 60,
          }
        });
      };
      const handleIncrementDecrement = (name: string, type: string) => {
        setTime((prev) => {
          if (type === "increment") {
            return {
              ...prev,
              [name]: Number(prev[name] + 1 * 60 ),
            };
          } else {
            return {
              ...prev,
              [name]: Number(prev[name]- 1 * 60),
            };
          }
        });
        setTotalTime(prev => {
          if (type === "increment") {
            return {
              ...prev,
              [name]: Number(prev[name] + 1 * 60 ),
            };
          } else {
            return {
              ...prev,
              [name]: Number(prev[name]- 1 * 60),
            };
          }
        });
      };

    return (
        <SettingsContext.Provider value={{time, setTime, handleChange,preferences,setPreferences, handleIncrementDecrement,currentTab, setCurrentTab, totalTime, setTotalTime}}>
            {children}
        </SettingsContext.Provider>
    )
}
export default SettingsProvider;