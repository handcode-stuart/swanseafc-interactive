import React from "react";
import "./style.scss";

import MainContainer from "../MainContainer/MainContainer";

import leroyImage from "../../assets/images/leroy.png";

const FrameContainer = () => {
    return (
        <div className='frame-container'>
            <MainContainer />
            <img src={leroyImage} className='leroy-image' alt='Leroy Fer' />
        </div>
    );
};

export default FrameContainer;
