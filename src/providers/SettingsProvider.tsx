import React, { createContext, useState, ReactNode, ChangeEvent } from "react";

interface TimeState {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
}

interface PreferencesState {
  font: string;
  color: string;
}

export interface SettingsContextType {
  time: TimeState;
  setTime: React.Dispatch<React.SetStateAction<TimeState>>;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  preferences: PreferencesState;
  setPreferences: React.Dispatch<React.SetStateAction<PreferencesState>>;
  handleIncrementDecrement: (name: keyof TimeState, type: "increment" | "decrement") => void;
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
  totalTime: TimeState;
  setTotalTime: React.Dispatch<React.SetStateAction<TimeState>>;
}

export const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

interface SettingsProviderProps {
  children: ReactNode;
}

const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  const [time, setTime] = useState<TimeState>({
    pomodoro: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
  });

  const [totalTime, setTotalTime] = useState<TimeState>({
    pomodoro: time.pomodoro || 25 * 60,
    shortBreak: time.shortBreak || 5 * 60,
    longBreak: time.longBreak || 15 * 60,
  });

  const [preferences, setPreferences] = useState<PreferencesState>({
    font: "Kumbh",
    color: "red",
  });

  const [currentTab, setCurrentTab] = useState<string>("pomodoro");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name in time) {
      setTime((prev) => ({
        ...prev,
        [name]: Number(value) * 60,
      }));
      setTotalTime((prev) => ({
        ...prev,
        [name]: Number(value) * 60,
      }));
    }
  };

  const handleIncrementDecrement = (name: keyof TimeState, type: "increment" | "decrement") => {
    setTime((prev) => ({
      ...prev,
      [name]: prev[name] + (type === "increment" ? 1 : -1) * 60,
    }));
    setTotalTime((prev) => ({
      ...prev,
      [name]: prev[name] + (type === "increment" ? 1 : -1) * 60,
    }));
  };

  return (
    <SettingsContext.Provider
      value={{
        time,
        setTime,
        handleChange,
        preferences,
        setPreferences,
        handleIncrementDecrement,
        currentTab,
        setCurrentTab,
        totalTime,
        setTotalTime,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
