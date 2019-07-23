import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.scss";

class ResultsContainer extends Component {
    componentWillMount() {
        this.props.setNavBarState(4);
    }

    render() {
        const yayClass =
            this.props.stackChoice === "juniorJack"
                ? "results-container__yay  junior-jacks-font"
                : "results-container__yay";

        return (
            <div className='results-container'>
                <h2 className={yayClass}>YAY!</h2>
                <h2 className='results-container__congratulations'>
                    Congratulations <br />
                    you scored
                </h2>
                <div className='results-container__score-holder'>
                    <div className='results-container__score-holder-col-one'>
                        <span className='results-container__rounds--green'>
                            {this.props.totalRoundsCorrect}
                        </span>
                        <span className='results-container__rounds'>/10</span>
                    </div>
                    <div className='results-container__break' />
                    <div className='results-container__score-holder-col-two'>
                        <span className='results-container__total-score'>
                            {this.props.totalScore}
                        </span>{" "}
                        <span className='results-container__total-score-small'>PTS</span>
                    </div>
                </div>
            </div>
        );
    }
}

ResultsContainer.propTypes = {
    totalScore: PropTypes.number.isRequired,
};

export default ResultsContainer;
