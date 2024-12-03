import React from "react";
import { HubButtons } from "./meta";
import "./style.css";

const HubCourseSwitch = ({ selectedButton, setSelectedButton }) => {
    const toggle = (event) => {
        if (
            selectedButton !== event.target.id &&
            selectedButton !== HubButtons.COURSE
        ) {
            setSelectedButton(HubButtons.COURSE);
            return;
        } else if (
            selectedButton !== event.target.id &&
            selectedButton !== HubButtons.HUB
        ) {
            setSelectedButton(HubButtons.HUB);
        }
    };

    const SwitchButton = ({ title }) => {
        return (
            <div
                className={`switch-button button ${
                    selectedButton === title && "selected-hub-button"
                }`}
                id={title}
                onClick={(event) => toggle(event)}
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
