import React from "react";
import { SettingsContext } from "../../providers/SettingsProvider"

export const NavTab = () => {
    const {currentTab, setCurrentTab, setTotalTime, time} = React.useContext(SettingsContext);

    const tabs = [{
        name: "pomodoro",
        id:'pomodoro',
    },
{
        name: "short break",
        id:'shortBreak',
    },
{
        name: "long break",
        id:'longBreak',
}];

    return (
        <div className="navbar">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    className={currentTab === tab.id ? "active" : ""}
                    style={{transition: "all 0.2s ease"}}
                    onClick={() => {
                        setCurrentTab(tab.id);
                        setTotalTime(prev => {
                            return {
                                ...prev,
                                [currentTab]: time[currentTab],
                            }
                        });
                        
                    }}
                >
                    {tab.name}
                </button>
            ))}
        </div>
    )
}