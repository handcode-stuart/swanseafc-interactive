import React from "react";
import "./style.scss";

const SelectDifficulty = props => {
    const componentClass = ["select-difficulty-tag"];
    props.navBarState === 2 && componentClass.push("fade-out");
    return <div className={componentClass.join(" ")}>Select Difficulty</div>;
};

export default SelectDifficulty;
