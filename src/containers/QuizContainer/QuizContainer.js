import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.scss";

// Containers
import QuestionContainer from "../QuestionContainer/QuestionContainer";
import ConfirmStack from "../ConfirmStack/ConfirmStack";

// Components
import QuizCountdown from "../../components/QuizCountdown/QuizCountdown";

class QuizContainer extends Component {
    render() {
        return (
            <div className='quiz-container'>
                {this.props.isCountingDown ? (
                    <QuizCountdown
                        countdownTime={this.props.countdownTime}
                        handleCountdown={this.props.handleCountdown}
                        stoppedCountingDown={this.props.stoppedCountingDown}
                    />
                ) : this.props.gameStarted ? (
                    <QuestionContainer
                        setNavBarState={this.props.setNavBarState}
                        showingAnswer={this.props.showingAnswer}
                        roundNumber={this.props.roundNumber}
                        stackChoice={this.props.stackChoice}
                        handleRoundScore={this.props.handleRoundScore}
                        lastAnswer={this.props.lastAnswer}
                        questionIsCountingDown={this.props.questionIsCountingDown}
                        startQuestionCountDown={this.props.startQuestionCountDown}
                        stoppedQuestionCountingDown={this.props.stoppedQuestionCountingDown}
                        questionCountdownTime={this.props.questionCountdownTime}
                        handleQuestionCountdown={this.props.handleQuestionCountdown}
                    />
                ) : (
                    <ConfirmStack
                        setNavBarState={this.props.setNavBarState}
                        startCountDown={this.props.startCountDown}
                        stackChoice={this.props.stackChoice}
                        navBarState={this.props.navBarState}
                    />
                )}
            </div>
        );
    }
}

QuizContainer.propTypes = {
    setNavBarState: PropTypes.func.isRequired,
    showingAnswer: PropTypes.bool.isRequired,
    isCountingDown: PropTypes.bool.isRequired,
    gameStarted: PropTypes.bool.isRequired,
    startCountDown: PropTypes.func.isRequired,
    stoppedCountingDown: PropTypes.func.isRequired,
    stackChoice: PropTypes.string.isRequired,
    restartQuiz: PropTypes.func.isRequired,
    handleRoundScore: PropTypes.func.isRequired,
    roundNumber: PropTypes.number.isRequired,
    lastAnswer: PropTypes.string.isRequired,
    questionIsCountingDown: PropTypes.bool.isRequired,
    startQuestionCountDown: PropTypes.func.isRequired,
    stoppedQuestionCountingDown: PropTypes.func.isRequired,
    questionCountdownTime: PropTypes.number.isRequired,
    handleQuestionCountdown: PropTypes.func.isRequired,
};

export default QuizContainer;
