import { useRef, useEffect, useContext, FormEvent } from "react";
import { SettingsContext, SettingsContextType } from "../../providers/SettingsProvider";
import Cookies from "js-cookie";
import { RED_COLOR, BLUE_COLOR, PURPLE_COLOR } from "../../constants";
import { KUMBH_FONT, ROBOTO_FONT, SPACE_FONT } from "../../constants";
import { InputField } from "../InputField/InputField";

interface FormProps {
  openModal: boolean;
  closeModal: () => void;
}

export const Form: React.FC<FormProps> = ({ openModal, closeModal }) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const {
    totalTime,
    setPreferences,
    preferences,
    handleIncrementDecrement,
    handleChange,
  } = useContext(SettingsContext) as SettingsContextType;

  useEffect(() => {
    if (openModal) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [openModal]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const root = document.querySelector("html") as HTMLElement;
    e.preventDefault();
    const target = e.target as typeof e.target & {
      color: { value: string };
      font: { value: string };
    };
    Cookies.set("data-theme", target.color.value);
    Cookies.set("font", target.font.value);

    const themeColor = target.color.value === "red" ? RED_COLOR : target.color.value === "blue" ? BLUE_COLOR : PURPLE_COLOR;
    const savedFont = target.font.value === "Kumbh Sans" ? KUMBH_FONT : target.font.value === "Roboto Slab" ? ROBOTO_FONT : SPACE_FONT;

    root.style.setProperty("--color-primary", themeColor["--color-primary"]);
    root.style.setProperty("--color-primary-hover", themeColor["--color-primary-hover"]);
    root.style.setProperty("--font-primary", savedFont["--font-primary"]);

    closeModal();
  }

  return (
    <dialog onCancel={closeModal} ref={modalRef} className="modal">
      <div className="form-container">
        <div className="settings-header">
          <h2>Settings</h2>
          <svg
            className="close-button"
            onClick={closeModal}
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
          >
            <path
              fill="#1E213F"
              fillRule="evenodd"
              d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z"
              opacity=".5"
            />
          </svg>
        </div>
        <form className="form-body" onSubmit={handleSubmit}>
          <h3>Time (Minutes)</h3>
          <div className="pomoForm">
            <InputField
              label="pomodoro"
              handleIncrementDecrement={handleIncrementDecrement}
              handleChange={handleChange}
              value={Math.floor(totalTime.pomodoro / 60)}
              name="pomodoro"
            />
            <InputField
              label="short break"
              handleIncrementDecrement={handleIncrementDecrement}
              handleChange={handleChange}
              value={Math.floor(totalTime.shortBreak / 60)}
              name="shortBreak"
            />
            <InputField
              label="long break"
              handleIncrementDecrement={handleIncrementDecrement}
              handleChange={handleChange}
              value={Math.floor(totalTime.longBreak / 60)}
              name="longBreak"
            />
          </div>
          <div className="font-picker-container">
            <h3>Font</h3>
            <div className="font-picker">
              <div>
                <input
                  checked={preferences.font === "Kumbh"}
                  onChange={() => setPreferences({ ...preferences, font: "Kumbh" })}
                  type="radio"
                  id="Kumbh"
                  name="font"
                  value="Kumbh Sans"
                />
                <label htmlFor="Kumbh">Aa</label>
              </div>
              <div>
                <input
                  checked={preferences.font === "Roboto"}
                  onChange={() => setPreferences({ ...preferences, font: "Roboto" })}
                  type="radio"
                  id="Roboto"
                  name="font"
                  value="Roboto Slab"
                />
                <label htmlFor="Roboto">Aa</label>
              </div>
              <div>
                <input
                  checked={preferences.font === "Space"}
                  onChange={() => setPreferences({ ...preferences, font: "Space" })}
                  type="radio"
                  id="Space"
                  name="font"
                  value="Space Mono"
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
                  onChange={() => setPreferences({ ...preferences, color: "red" })}
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
                  onChange={() => setPreferences({ ...preferences, color: "blue" })}
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
                  onChange={() => setPreferences({ ...preferences, color: "purple" })}
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
