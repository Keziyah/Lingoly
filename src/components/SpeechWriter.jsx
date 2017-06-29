import React, { Component } from 'react'
import {connect} from 'react-redux'
import {updateDraft} from '../actions/index.js'
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
    }

    render() {
        const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props
        if (!browserSupportsSpeechRecognition) {
            return null
        }
        this.props.updateDraft(transcript)
        return (
            <div className="container anim">
                <div id="speechwriter">
                    <h3>Write your speech.</h3>
                    <div>
                        <textarea rows="10" cols="60" placeholder="Start talking to write your speech here." value={transcript}></textarea>
                    </div>
                    <button className="mdl-button mdl-js-button mdl-button--raised" onClick={resetTranscript}>Reset</button>
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.props.checkGrammar}>Show Grammar Checker</button>
                </div>
            </div>
        )
    }
} 

SpeechWriter.propTypes = propTypes
const SpeechComponent = SpeechRecognition(SpeechWriter)
export default connect(null, {updateDraft})(SpeechComponent)
