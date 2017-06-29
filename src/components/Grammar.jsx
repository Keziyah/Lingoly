import React, { Component } from 'react'
import {connect} from 'react-redux'
import {correctGrammar, saveSpeech} from '../actions/index.js'
// import axios from 'axios'
import HighlightedTextarea from 'react-highlighted-textarea'

//using the language tool api: https://languagetool.org/http-api/swagger-ui/#!/default/post_check 

class Grammar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: '',
            disabled: true,
            grammarMessage: '',
            showHighlights: false
        }
        this.readyForCheck = this.readyForCheck.bind(this)
        this.checkGrammar = this.checkGrammar.bind(this)
        this.doHighlight = this.doHighlight.bind(this)
        this.saveSpeech = this.saveSpeech.bind(this)
    }

    componentWillMount() {
        const copy = this.props.transcript + ""
        this.setState({ text: copy })
    }

    readyForCheck(e) {
        this.setState({ text: e.target.value, disabled: false })
    }

    checkGrammar(e) {
        e.preventDefault()
        this.props.correctGrammar(this.state.text)

        if (!this.props.corrections.length) {
            this.setState({ grammarMessage: "Checking..." })
        }

        this.setState({ showHighlights: true })
    }

    doHighlight() {
        let arr = this.props.corrections.map(mistake => {
            return [mistake.offset, mistake.length]
        })
        return arr
    }

    saveSpeech() {
        this.props.saveSpeech(this.state.text)
    }

    render() {
        return (
            <div className="row anim">
                <div className="col-md-5">
                    <form onSubmit={this.checkGrammar}>
                        <textarea onChange={this.readyForCheck} value={this.state.text} name="checker" id="grammarCheck" cols="60" rows="10"></textarea>
                        <div>
                            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="submit" disabled={this.state.disabled}>{this.state.disabled ? "Edit your speech first." : "Check Grammar"}</button>
                            {!this.state.disabled && <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this.saveSpeech}>Save</button>}
                        </div>
                    </form>
                </div>

                <div className="col-md-5" id="correct">
                    {
                        this.state.showHighlights &&
                        <HighlightedTextarea highlight={this.doHighlight} value={this.state.text}></HighlightedTextarea>
                    }

                    <div className="corrections">
                        {this.props.corrections.length ?
                            this.props.corrections && this.props.corrections.map((thing, i) => {
                                return <h4 key={Date.now()}>{i + 1}. {thing.message}</h4>
                            })
                            : this.state.grammarMessage || "Grammar looks fine."
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapState = ({correct}) => ({corrections: correct.correctedText})
export default connect(mapState, {correctGrammar, saveSpeech})(Grammar)

//A person clicks show grammar checkers and this text area appears with what they said
//Check grammar is disabled until they edit their speech. 
//Once they edit their speech, or once the value of the text area has been changed
//  the check grammar button is enabled
//The person clicks check grammar which makes the api request. 
//The api sends us the mistakes and the indexes of where they are in the string. 
// When the button is clicked, show highlight is set to true, which enables the display of the highlighted mistakes. 

//Highlighted text area normally comes with it's own textarea, but I set that to hidden in the CSS


