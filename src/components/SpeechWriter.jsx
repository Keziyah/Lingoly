import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
//A component built on the Web Speech API
import SpeechRecognition from 'react-speech-recognition'
import Grammar from './Grammar'

const propTypes = {
    // Props injected by SpeechRecognition
    transcript: PropTypes.string,
    resetTranscript: PropTypes.func,
    browserSupportsSpeechRecognition: PropTypes.bool
}

class SpeechWriter extends Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     grammar: false
        // }

        // this.checkGrammar = this.checkGrammar.bind(this)
    }

    // checkGrammar() {
    //     this.setState({ grammar: !this.state.grammar })
    // }

    render() {
        const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props
        if (!browserSupportsSpeechRecognition) {
            return null
        }
        console.log(transcript)
        return (
            <div className="container anim">
                <div id="speechwriter">
                    <h3>Write your speech.</h3>
                    <div>
                        <textarea rows="10" cols="60" placeholder="Start talking to write your speech here." value={transcript}></textarea>
                    </div>
                    <button className="mdl-button mdl-js-button mdl-button--raised" onClick={resetTranscript}>Reset</button>
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.props.checkGrammar}>Shhow Grammar Checker</button>
                </div>
                {/*{this.state.grammar && <Grammar transcript={transcript} />}*/}
            </div>
        )
    }
}

//Above with the exit link (it's now in the navbar in home): I have to reload the page in order to get recognition to stop listening. 
//Otherwise I do not know how to turn recognition off. 

SpeechWriter.propTypes = propTypes
export default SpeechRecognition(SpeechWriter)
