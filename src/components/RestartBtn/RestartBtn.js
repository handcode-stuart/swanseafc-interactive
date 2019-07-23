import React from 'react'
import PropTypes from 'prop-types'

const RestartBtn = (props) => {
    return (
        <button className="btn  btn--restart" onClick={props.restartQuiz}>
            Start Again
        </button>
    )
}

RestartBtn.propTypes = {
    restartQuiz: PropTypes.func.isRequired,
}

export default RestartBtn
