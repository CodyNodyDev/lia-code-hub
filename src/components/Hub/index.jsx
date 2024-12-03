import React, { useState } from "react";
import PythonPostsList from "../PythonPostsList";
import CourseSection from "../CourseSection";
import HubCourseSwitch from "../HubCourseSwitch";
import { HubButtons } from "../HubCourseSwitch/meta";
import "./style.css";

const Hub = () => {
    const [currentSection, setCurrentSection] = useState(HubButtons.HUB);

    return (
        <div className="hub-container">
            // тут все разделы хаба: документация, задачи
            <HubCourseSwitch
                selectedButton={currentSection}
                setSelectedButton={setCurrentSection}
            />
            {currentSection === HubButtons.HUB && <PythonPostsList />}
            {currentSection === HubButtons.COURSE && <CourseSection />}
        </div>
    );
};

export default Hub;
