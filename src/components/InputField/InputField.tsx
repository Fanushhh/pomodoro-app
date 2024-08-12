export const InputField = ({
  label,
  handleChange,
  value,
  handleIncrementDecrement,
  name
  
}) => {
  return (
    <div className="input-field">
      <label htmlFor="time">{label}</label>
      <input
        value={value}
        onChange={(e) => handleChange(e)}
        type="text"
        name={name}
        id="pomodoro"
      />
      <div className="arrow-container">
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          onClick={() => handleIncrementDecrement(name,"increment")}
          height="10"
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
          onClick={() => handleIncrementDecrement(name,"decrement")}
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="10"
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
