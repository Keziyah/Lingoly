import React, { Component } from 'react'
import {connect} from 'react-redux'
import {findWord} from '../actions/index.js'
import axios from 'axios'

class PronDict extends Component {
    constructor() {
        super()

        this.state = {
            word: ''
        }

        this.saveWord = this.saveWord.bind(this)
        this.findWord = this.findWord.bind(this)
    }

    saveWord(e) {
        this.setState({ word: e.target.value })
    }
    
    //Using Merriam-Webster's learners dictionary API. 
    findWord(e) {
        e.preventDefault()
        this.props.findWord(this.state.word)
    }

    render() {
        return (
            <div className="anim" id="pron-dict">
                <h1>Pronunciation</h1>
                <div id="pron-outline">
                    <form onSubmit={this.findWord}>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" onChange={this.saveWord} value={this.state.word} type="text" placeholder="type a word" />
                            <button type="submit" id="look-up" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Look up word</button>
                        </div>
                    </form>
                    {
                        this.props.word &&
                        <div>
                            <audio id="pron-audio" controls>
                                <source src={this.props.word.audiosrc} />
                            </audio>
                            <h2 id="ipa">{this.props.word.pron}</h2>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

const mapState = ({dictionary}) => ({word: dictionary.words[0]})
export default connect(mapState, {findWord})(PronDict)
