import React from "react";
import { HubButtons } from "./meta";
import "./style.css";

const HubCourseSwitch = ({ selectedButton, setSelectedButton }) => {
    const toggle = () => {
        if (selectedButton === HubButtons.HUB) {
            setSelectedButton(HubButtons.COURSE);
            return;
        }
        setSelectedButton(HubButtons.HUB);
    };

    const SwitchButton = ({ title }) => {
        return (
            <div
                className={`switch-button button ${
                    selectedButton === title && "selected-hub-button"
                }`}
                onClick={toggle}
            >
                {title}
            </div>
        );
    };

    return (
        <div className="hub-course-switch-container">
            <SwitchButton title={HubButtons.HUB} />
            <SwitchButton title={HubButtons.COURSE} />
        </div>
    );
};

export default HubCourseSwitch;
