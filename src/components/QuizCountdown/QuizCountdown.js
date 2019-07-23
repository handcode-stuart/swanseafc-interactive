import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.scss";

class QuizCountdown extends Component {
    countdownLoop() {
        let countdownInterval = setInterval(() => {
            if (this.props.countdownTime > 1) {
                this.props.handleCountdown();
            } else {
                clearTimeout(countdownInterval);
                this.props.stoppedCountingDown();
            }
        }, 1000);
    }

    componentDidMount() {
        this.countdownLoop();
    }

    render() {
        return <div className='quiz-countdown'>{this.props.countdownTime}</div>;
    }
}

QuizCountdown.propTypes = {
    stoppedCountingDown: PropTypes.func.isRequired,
};

export default QuizCountdown;
