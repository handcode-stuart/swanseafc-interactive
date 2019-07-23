import React, { Component } from "react";
import "./style.scss";

import questions from "../../content/questions";

import QuestionCountdown from "../../components/QuestionCountdown/QuestionCountdown";

class QuestionContainer extends Component {
    componentWillMount() {
        this.props.setNavBarState(3);
    }

    handleAnswer(userAnswer) {
        userAnswer
            ? this.props.handleRoundScore(this.props.questionCountdownTime * 100)
            : this.props.handleRoundScore(0);
    }

    showQuestionAnswers() {
        const questionAnswers =
            questions[this.props.stackChoice]["q" + this.props.roundNumber].answers;

        const juniorJacksAnswerClass =
            this.props.stackChoice === "juniorJack"
                ? "btn  btn--answer  junior-jacks-answer-font"
                : "btn  btn--answer";

        const answersArray = questionAnswers.map((answer, index) => {
            return (
                <button
                    className={juniorJacksAnswerClass}
                    key={index}
                    onClick={() => {
                        this.handleAnswer(answer[1]);
                    }}
                >
                    {answer[0]}
                </button>
            );
        });

        return answersArray;
    }

    showCorrectAnswer() {
        const questionAnswers =
            questions[this.props.stackChoice]["q" + this.props.roundNumber].answers;

        const answersArray = questionAnswers.map((answer, index) => {
            let buttonClass = ["btn", "btn--answer", "answer-" + (index + 1)];

            this.props.stackChoice === "juniorJack" && buttonClass.push("junior-jacks-answer-font");

            this.props.lastAnswer === "Correct"
                ? buttonClass.push("user-correct")
                : buttonClass.push("user-incorrect");

            answer[1] ? buttonClass.push("correct-answer") : buttonClass.push("wrong-answer");

            return (
                <button className={buttonClass.join(" ")} key={index}>
                    {answer[0]}
                </button>
            );
        });

        return answersArray;
    }

    render() {
        const resultStyle =
            this.props.lastAnswer === "Correct" ? { color: "#7BD951" } : { color: "#FF4459" };
        const juniorJacksQuestionClass =
            this.props.stackChoice === "juniorJack" ? "junior-jacks-font" : "";

        return this.props.showingAnswer ? (
            <div>
                <div className='showing-answer'>
                    <div className='showing-answer__inner-holder'>
                        <h3 className={juniorJacksQuestionClass} style={resultStyle}>
                            {this.props.lastAnswer === "Correct" ? "Correct" : "Oops"}!!
                        </h3>
                    </div>
                </div>
                {this.showCorrectAnswer()}
            </div>
        ) : (
            <div>
                <div className='question-container'>
                    <div className='question-container__inner-holder'>
                        <h3 className={juniorJacksQuestionClass}>
                            {
                                questions[this.props.stackChoice]["q" + this.props.roundNumber]
                                    .question
                            }
                        </h3>
                    </div>
                </div>
                <QuestionCountdown
                    questionIsCountingDown={this.props.questionIsCountingDown}
                    startQuestionCountDown={this.props.startQuestionCountDown}
                    stoppedQuestionCountingDown={this.props.stoppedQuestionCountingDown}
                    questionCountdownTime={this.props.questionCountdownTime}
                    handleQuestionCountdown={this.props.handleQuestionCountdown}
                    handleRoundScore={this.props.handleRoundScore}
                />
                <div className='question-answers'>{this.showQuestionAnswers()}</div>
            </div>
        );
    }
}

export default QuestionContainer;
