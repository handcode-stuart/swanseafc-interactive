import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./global/global.scss";

import FrameContainer from "./containers/FrameContainer/FrameContainer";

class App extends Component {
    render() {
        return <FrameContainer />;
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
