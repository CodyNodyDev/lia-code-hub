import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
import DefaultLayout from "../../layouts/DefaultLayout";
import Hub from "../../components/Hub";

const MainPage = () => {
    
    return (
        <DefaultLayout title={"Обучающий хаб"}>
            {/* <div className="text">Python doc library</div> */}
            <Hub />
        </DefaultLayout>
    );
};

export default MainPage;
