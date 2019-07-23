import React, { Component } from "react";
import "./style.scss";

export class JuniorJacksCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            componentClass: ["stack-container", "stack-container--JuniorJacks"],
        };
    }

    componentDidMount() {
        if (this.props.stackChoice && this.props.stackChoice !== "") {
            this.props.stackChoice === "juniorJack"
                ? this.setState({
                      componentClass: [...this.state.componentClass, "selected-stack"],
                  })
                : this.setState({
                      componentClass: [...this.state.componentClass, "not-selected-stack"],
                  });
        }
    }

    render() {
        return (
            <div className={this.state.componentClass.join(" ")}>
                <div className='back-card  back-card--one' />
                <div className='back-card  back-card--two' />
                <button
                    className='card  card--JuniorJacks'
                    onClick={() => {
                        this.props.userStackChoice("juniorJack");
                    }}
                />
            </div>
        );
    }
}

export class AdultsCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            componentClass: ["stack-container", "stack-container--adults"],
        };
    }

    componentDidMount() {
        if (this.props.stackChoice && this.props.stackChoice !== "") {
            this.props.stackChoice === "adult"
                ? this.setState({
                      componentClass: [...this.state.componentClass, "selected-stack"],
                  })
                : this.setState({
                      componentClass: [...this.state.componentClass, "not-selected-stack"],
                  });
        }
    }

    render() {
        return (
            <div className={this.state.componentClass.join(" ")}>
                <div className='back-card  back-card--one' />
                <div className='back-card  back-card--two' />
                <button
                    className='card  card--adults'
                    onClick={() => {
                        this.props.userStackChoice("adult");
                    }}
                />
            </div>
        );
    }
}
