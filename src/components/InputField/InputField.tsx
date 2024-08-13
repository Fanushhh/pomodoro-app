import React, { ChangeEvent } from "react";

interface InputFieldProps {
  label: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: number;
  handleIncrementDecrement: (name: string, type: "increment" | "decrement") => void;
  name: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  handleChange,
  value,
  handleIncrementDecrement,
  name,
}) => {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={handleChange}
        type="text"
        name={name}
        id={name}
      />
      <div className="arrow-container">
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="10"
          onClick={() => handleIncrementDecrement(name, "increment")}
        >
          <path
            fill="none"
            stroke="#1E213F"
            strokeOpacity=".25"
            strokeWidth="2"
            d="M1 6l6-4 6 4"
          />
        </svg>
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="10"
          onClick={() => handleIncrementDecrement(name, "decrement")}
        >
          <path
            fill="none"
            stroke="#1E213F"
            strokeOpacity=".25"
            strokeWidth="2"
            d="M1 1l6 4 6-4"
          />
        </svg>
      </div>
    </div>
  );
};
