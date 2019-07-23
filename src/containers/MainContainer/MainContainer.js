import React, { Component } from "react";
import "./style.scss";

// Containers
import QuizContainer from "../QuizContainer/QuizContainer";
import StackContainer from "../StackContainer/StackContainer";
import ResultsContainer from "../ResultsContainer/ResultsContainer";

// Components
import QuizNav from "../../components/QuizNav/QuizNav";
import RestartBtn from "../../components/RestartBtn/RestartBtn";

const initialState = {
    sessionStarted: false,
    navBarState: 1, // 1 = start page, 2 = confirm stack, 3 = questions, 4 = results page
    chosenStack: "",
    countdownTime: 3,
    isCountingDown: false,
    userAnswered: false,
    questionIsCountingDown: false,
    questionCountdownTime: 10,
    gameStarted: false,
    gameFinished: false,
    showingAnswer: false,
    lastAnswer: "",
    roundNumber: 1,
    round_1: 0,
    round_2: 0,
    round_3: 0,
    round_4: 0,
    round_5: 0,
    round_6: 0,
    round_7: 0,
    round_8: 0,
    round_9: 0,
    round_10: 0,
    totalRoundsCorrect: 0,
    totalScore: 0,
};

class MainContainer extends Component {
    constructor() {
        super();

        this.state = {
            ...initialState,
        };

        this.startCountDown = this.startCountDown.bind(this);
        this.stoppedCountingDown = this.stoppedCountingDown.bind(this);
        this.restartQuiz = this.restartQuiz.bind(this);
        this.handleUserStackChoice = this.handleUserStackChoice.bind(this);
        this.handleRoundScore = this.handleRoundScore.bind(this);
        this.handleCountdown = this.handleCountdown.bind(this);
        this.goToNextRound = this.goToNextRound.bind(this);
        this.handleQuestionCountdown = this.handleQuestionCountdown.bind(this);
        this.startQuestionCountDown = this.startQuestionCountDown.bind(this);
        this.stoppedQuestionCountingDown = this.stoppedQuestionCountingDown.bind(this);
        this.showScore = this.showScore.bind(this);
        this.setNavBarState = this.setNavBarState.bind(this);
    }

    /**
     * Sets state.chosenStack to the users stack choice and turn state.sessionStarted to true
     * @param {String} stackChoice - the stack that the user is choosing, either 'adult' or 'juniorJack'
     */
    handleUserStackChoice(stackChoice) {
        this.setState({
            sessionStarted: true,
            chosenStack: stackChoice,
        });
    }

    setNavBarState(navBarStateToChangeTo) {
        this.setState({
            navBarState: navBarStateToChangeTo,
        });
    }

    handleCountdown() {
        this.setState({
            countdownTime: this.state.countdownTime - 1,
        });
    }

    handleQuestionCountdown() {
        this.setState({
            questionCountdownTime: this.state.questionCountdownTime - 1,
        });
    }

    startCountDown() {
        this.setState({
            isCountingDown: true,
            gameStarted: true,
        });
    }

    startQuestionCountDown() {
        this.setState({
            questionIsCountingDown: true,
        });
    }

    stoppedCountingDown() {
        this.setState({
            isCountingDown: false,
        });
    }

    stoppedQuestionCountingDown() {
        this.setState({
            questionIsCountingDown: false,
            questionCountdownTime: 10,
        });
    }

    goToNextRound() {
        this.state.roundNumber === 10
            ? this.setState({
                  gameFinished: true,
              })
            : this.setState({
                  roundNumber: this.state.roundNumber + 1,
              });
    }

    handleRoundScore(roundScore) {
        if (roundScore !== null) {
            if (roundScore !== 0) {
                this.setState({
                    totalRoundsCorrect: this.state.totalRoundsCorrect + 1,
                    totalScore: this.state.totalScore + roundScore,
                });
            }
            this.setState(
                {
                    ["round_" + this.state.roundNumber]: roundScore,
                },
                () => {
                    this.showScore();
                },
            );
        } else {
            this.showScore();
        }
    }

    showScore() {
        this.state["round_" + this.state.roundNumber] > 0
            ? this.setState({
                  lastAnswer: "Correct",
                  showingAnswer: true,
              })
            : this.setState({
                  lastAnswer: "Incorrect",
                  showingAnswer: true,
              });

        setTimeout(() => {
            this.setState({
                showingAnswer: false,
            });
            this.goToNextRound();
        }, 2000);
    }

    restartQuiz() {
        this.setState({
            ...initialState,
        });
    }

    render() {
        return (
            <div className='main-container'>
                <QuizNav
                    questionCountdownTime={this.state.questionCountdownTime}
                    totalRoundsCorrect={this.state.totalRoundsCorrect}
                    navBarState={this.state.navBarState}
                    stackChoice={this.state.chosenStack}
                    roundNumber={this.state.roundNumber}
                    totalScore={this.state.totalScore}
                />
                {!this.state.sessionStarted ? (
                    <StackContainer
                        userStackChoice={this.handleUserStackChoice}
                        navBarState={this.state.navBarState}
                    />
                ) : this.state.gameFinished ? (
                    <ResultsContainer
                        setNavBarState={this.setNavBarState}
                        totalScore={this.state.totalScore}
                        totalRoundsCorrect={this.state.totalRoundsCorrect}
                        stackChoice={this.state.chosenStack}
                    />
                ) : (
                    <QuizContainer
                        setNavBarState={this.setNavBarState}
                        showingAnswer={this.state.showingAnswer}
                        countdownTime={this.state.countdownTime}
                        questionCountdownTime={this.state.questionCountdownTime}
                        handleCountdown={this.handleCountdown}
                        handleQuestionCountdown={this.handleQuestionCountdown}
                        isCountingDown={this.state.isCountingDown}
                        questionIsCountingDown={this.state.questionIsCountingDown}
                        gameStarted={this.state.gameStarted}
                        startCountDown={this.startCountDown}
                        startQuestionCountDown={this.startQuestionCountDown}
                        stoppedCountingDown={this.stoppedCountingDown}
                        stoppedQuestionCountingDown={this.stoppedQuestionCountingDown}
                        stackChoice={this.state.chosenStack}
                        restartQuiz={this.restartQuiz}
                        handleRoundScore={this.handleRoundScore}
                        roundNumber={this.state.roundNumber}
                        lastAnswer={this.state.lastAnswer}
                        navBarState={this.state.navBarState}
                    />
                )}
                <RestartBtn restartQuiz={this.restartQuiz} />
            </div>
        );
    }
}

export default MainContainer;
