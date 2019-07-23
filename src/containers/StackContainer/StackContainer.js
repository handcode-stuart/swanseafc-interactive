import React from "react";
import "./style.scss";

import { JuniorJacksCard, AdultsCard } from "../../components/Cards/Cards";
import SelectDifficulty from "../../components/SelectDifficulty/SelectDifficulty";

const StackContainer = props => {
    return (
        <div>
            <AdultsCard userStackChoice={props.userStackChoice} />
            <SelectDifficulty navBarState={props.navBarState} />
            <JuniorJacksCard userStackChoice={props.userStackChoice} />
        </div>
    );
};

export default StackContainer;
