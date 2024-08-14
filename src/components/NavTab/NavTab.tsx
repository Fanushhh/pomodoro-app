import React from "react";
import { SettingsContext, SettingsContextType } from "../../providers/SettingsProvider";

interface Tab {
  name: string;
  id: keyof SettingsContextType["time"];
}

export const NavTab: React.FC = () => {
  const { currentTab, setCurrentTab, setTotalTime, time } = React.useContext(SettingsContext) as SettingsContextType;

  const tabs: Tab[] = [
    {
      name: "pomodoro",
      id: "pomodoro",
    },
    {
      name: "short break",
      id: "shortBreak",
    },
    {
      name: "long break",
      id: "longBreak",
    },
  ];

  return (
    <div className="navbar">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={currentTab === tab.id ? "active" : ""}
          style={{ transition: "all 0.2s ease" }}
          onClick={() => {
            setCurrentTab(tab.id.toString());
            // setTotalTime((prev) => ({
            //   ...prev,
            //   [tab.id]: time[tab.id],
            // }));
          }}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};
