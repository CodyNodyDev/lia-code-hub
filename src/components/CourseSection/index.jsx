import React from "react";
import "./style.css";

const CourseSection = () => {
    return (
        <div className="courses-section-container">
            <span className="courses-section-title title">
                Раздел находится в разработке
            </span>
            <div className="courses-list">
                <div
                    className="course-container"
                    style={{
                        color: "black",
                        display: "flex",
                        textAlign: "center",
                        alignItems: "center",
                    }}
                >
                    Как только раздел начнет работать, мы вас оповестим
                </div>
            </div>
        </div>
    );
};

export default CourseSection;
