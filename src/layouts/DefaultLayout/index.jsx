import React from "react";
import Header from "../../components/Header";
import "./style.css";

const DefaultLayout = ({ children, title }) => {
    return (
        <div className="layout">
            <Header title={title} />
            {children}
        </div>
    );
};

export default DefaultLayout;
