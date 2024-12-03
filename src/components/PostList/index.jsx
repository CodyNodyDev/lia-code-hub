import React from "react";
import { USER_DESCRIPTIONS } from "./meta";
import "./style.css";

const PostList = () => {
    return (
        <div className="profile-container">
            <span className="profile-container-title">Описание</span>
            <div className="profile-description">{USER_DESCRIPTIONS.start}</div>
        </div>
    );
};

export default PostList;
