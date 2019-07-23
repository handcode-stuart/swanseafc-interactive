import React, { Component } from "react";
import "./style.scss";

class QuizNav extends Component {
    render() {
        let QuizNavContent = null;
        switch (this.props.navBarState) {
            case 1:
                QuizNavContent = <h2>Swans Trivia</h2>;
                break;

            case 2:
                QuizNavContent = (
                    <h2>{this.props.stackChoice === "juniorJack" ? "Junior Jacks" : "Adults"}</h2>
                );
                break;

            case 3:
                QuizNavContent = (
                    <div className='quiz-nav__quiz-score-holder'>
                        <div>
                            <span>Q{this.props.roundNumber}:</span>{" "}
                            <span className='quiz-nav__score'>
                                {this.props.questionCountdownTime * 100}
                            </span>
                        </div>
                        <div>
                            <span className='quiz-nav__round'>{this.props.totalRoundsCorrect}</span>
                            <span>/10</span>{" "}
                            <span className='quiz-nav__small'>of {this.props.roundNumber - 1}</span>
                        </div>
                        <div>
                            <span className='quiz-nav__total-score'>{this.props.totalScore}</span>{" "}
                            <span className='quiz-nav__small'>PTS</span>
                        </div>
                    </div>
                );
                break;

            case 4:
                QuizNavContent = <h2>Finished</h2>;
                break;
            default:
        }
        return <div className='quiz-nav'>{QuizNavContent}</div>;
    }
}

export default QuizNav;
