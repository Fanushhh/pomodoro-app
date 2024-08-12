import React, {useRef, useEffect} from "react";
import { InputField } from "../InputField/InputField";
export const Form = ({openModal, closeModal}) => {
  const modalRef = useRef();

  useEffect(() => {
    if (openModal) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [openModal]);
  const [time, setTime] = React.useState({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  });
  const [preferences, setPreferences] = React.useState({
    font: "Kumbh",
    color: "red",
  });
  

  const handleChange = (e: Event) => {
    setTime((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleIncrementDecrement = (name: string, type: string) => {
    setTime((prev) => {
      if (type === "increment") {
        return {
          ...prev,
          [name]: Number(prev[name]) + 1,
        };
      } else {
        return {
          ...prev,
          [name]: Number(prev[name]) - 1,
        };
      }
    });
  };

  return (
    
      <dialog onCancel={closeModal} ref={modalRef} className="modal">
        <div className="form-container">
          <div className="settings-header">
            <h2>Settings</h2>
            <svg className="close-button" onClick={closeModal} xmlns="http://www.w3.org/2000/svg" width="14" height="14">
              <path
                fill="#1E213F"
                fill-rule="evenodd"
                d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z"
                opacity=".5"
              />
            </svg>
          </div>
          <form className="form-body">
            <h3>Time (Minutes)</h3>
            <div className="pomoForm">
              <InputField
                label="pomodoro"
                handleIncrementDecrement={handleIncrementDecrement}
                handleChange={handleChange}
                value={time.pomodoro}
                name="pomodoro"
              />
              <InputField
                label="short break"
                handleIncrementDecrement={handleIncrementDecrement}
                handleChange={handleChange}
                value={time.shortBreak}
                name="shortBreak"
              />
              <InputField
                label="long break"
                handleIncrementDecrement={handleIncrementDecrement}
                handleChange={handleChange}
                value={time.longBreak}
                name="longBreak"
              />
            </div>
            <div className="font-picker-container">
              <h3>Font</h3>
              <div className="font-picker">
                <div>
                  <input
                    checked={preferences.font === "Kumbh"}
                    onChange={(event) => {
                      setPreferences({ ...preferences, font: event.target.value });
                    }}
                    type="radio"
                    id="Kumbh"
                    name="font"
                    value="Kumbh"
                  />
                  <label htmlFor="Kumbh">Aa</label>
                </div>
                <div>
                  <input
                    checked={preferences.font === "Roboto"}
                    onChange={(event) => {
                      setPreferences({ ...preferences, font: event.target.value });
                    }}
                    type="radio"
                    id="Roboto"
                    name="font"
                    value="Roboto"
                  />
                  <label htmlFor="Roboto">Aa</label>
                </div>
                <div>
                  <input
                    checked={preferences.font === "Space"}
                    onChange={(event) => {
                      setPreferences({ ...preferences, font: event.target.value });
                    }}
                    type="radio"
                    id="Space"
                    name="font"
                    value="Space"
                  />
                  <label htmlFor="Space">Aa</label>
                </div>
              </div>
            </div>
            <div className="color-picker-container">
              <h3>Color</h3>
              <div className="font-picker">
                <div>
                  <input
                    checked={preferences.color === "red"}
                    onChange={(event) => {
                      setPreferences({ ...preferences, color: event.target.value });
                    }}
                    type="radio"
                    id="red"
                    name="color"
                    value="red"
                  />
                  <label htmlFor="red"></label>
                  {preferences.color === "red" && (
                    <svg
                      className="check-mark"
                      width="15"
                      height="11"
                      viewBox="0 0 15 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.5L4.95263 9.45263L13.4053 1"
                        stroke="#161932"
                        strokeWidth="2"
                      />
                    </svg>
                  )}
                </div>
                <div>
                  <input
                    checked={preferences.color === "blue"}
                    onChange={(event) => {
                      setPreferences({ ...preferences, color: event.target.value });
                    }}
                    type="radio"
                    id="blue"
                    name="color"
                    value="blue"
                  />
                  <label htmlFor="blue"></label>
                  {preferences.color === "blue" && (
                    <svg
                      className="check-mark"
                      width="15"
                      height="11"
                      viewBox="0 0 15 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.5L4.95263 9.45263L13.4053 1"
                        stroke="#161932"
                        strokeWidth="2"
                      />
                    </svg>
                  )}
                </div>
                <div>
                  <input
                    checked={preferences.color === "purple"}
                    onChange={(event) => {
                      setPreferences({ ...preferences, color: event.target.value });
                    }}
                    type="radio"
                    id="purple"
                    name="color"
                    value="purple"
                  />
                  <label htmlFor="purple"></label>
                  {preferences.color === "purple" && (
                    <svg
                      className="check-mark"
                      width="15"
                      height="11"
                      viewBox="0 0 15 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.5L4.95263 9.45263L13.4053 1"
                        stroke="#161932"
                        strokeWidth="2"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <button className="apply-button">Apply</button>
          </form>
        </div>
      </dialog>
    
  );
};
