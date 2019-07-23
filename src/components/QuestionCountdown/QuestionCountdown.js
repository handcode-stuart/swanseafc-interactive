import React, { Component } from "react";
import "./style.scss";

let questionCountdownInterval;

class QuestionCountdown extends Component {
    questionCountdownLoop() {
        questionCountdownInterval = setInterval(() => {
            if (this.props.questionCountdownTime > 1) {
                this.props.handleQuestionCountdown();
            } else {
                this.stopQuestionCountdown();
                this.props.handleRoundScore(null);
            }
        }, 1000);
    }

    stopQuestionCountdown() {
        clearTimeout(questionCountdownInterval);
        this.props.stoppedQuestionCountingDown();
    }

    componentDidMount() {
        this.questionCountdownLoop();
    }

    componentWillUnmount() {
        this.stopQuestionCountdown();
    }

    render() {
        return <div>{/* {this.props.questionCountdownTime} */}</div>;
    }
}

export default QuestionCountdown;
