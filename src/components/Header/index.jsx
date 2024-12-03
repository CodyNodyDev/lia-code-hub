import React from "react";
import "./style.css";

const Header = ({ title, backButton = false }) => {
    return (
        <div className="header">
            {backButton && (
                <div className="back-button-container">
                    {/* todo: move svg to sprite */}
                    <svg
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18.0449 9.00004C11.3883 9.00004 0.999468 9.00004 0.999468 9.00004M0.999468 9.00004L8.66992 1.32959M0.999468 9.00004L8.66992 16.6705"
                            stroke="#F8EF00"
                            stroke-width="1.70455"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            )}
            <div className="header-title title">{title}</div>
        </div>
    );
};

export default Header;
