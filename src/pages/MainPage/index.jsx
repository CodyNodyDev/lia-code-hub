import React from "react";
import { useSelector } from "react-redux";
import TitleImageContent from "../../components/TitleImageContent";
import "./style.css";
import DefaultLayout from "../../layouts/DefaultLayout";

const MainPage = () => {
    
    return (
        <DefaultLayout title={"Обучающий хаб"}>
            <div className="text">Python doc library</div>
        </DefaultLayout>
    );
};

export default MainPage;
