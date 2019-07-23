import React, { Component } from "react";
import "./style.scss";

// Components
import { JuniorJacksCard, AdultsCard } from "../../components/Cards/Cards";
import SelectDifficulty from "../../components/SelectDifficulty/SelectDifficulty";

class ConfirmStack extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonClass: ["btn", "btn--start"],
            quoteClass: ["quote"],
        };
    }

    componentWillMount() {
        this.props.setNavBarState(2);
    }

    componentDidMount() {
        this.setState({
            buttonClass: [...this.state.buttonClass, "fade-in"],
        });
        this.setState({
            quoteClass: [...this.state.quoteClass, "fade-in"],
        });
    }

    render() {
        return (
            <div className='confirm-stack-container'>
                <AdultsCard stackChoice={this.props.stackChoice} />
                <SelectDifficulty navBarState={this.props.navBarState} />
                <JuniorJacksCard stackChoice={this.props.stackChoice} />
                <div className={this.state.quoteClass.join(" ")}>
                    {this.props.stackChoice === "adult"
                        ? "Think you know everything there is to know about the Swans? Test your knowledge in our adults quiz."
                        : "Think you know everything there is to know about the Swans? Test your knowledge in our Junior Jacks quiz."}
                </div>
                <button
                    className={this.state.buttonClass.join(" ")}
                    onClick={this.props.startCountDown}
                >
                    Start Quiz
                </button>
            </div>
        );
    }
}

export default ConfirmStack;
