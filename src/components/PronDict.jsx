import React, { Component } from 'react'
import {connect} from 'react-redux'
import {findWord} from '../actions/index.js'
import axios from 'axios'

class PronDict extends Component {
    constructor() {
        super()

        this.state = {
            word: '',
            data: '',
            audiosrc: '',
            pron: ''
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

        // axios.get('http://www.dictionaryapi.com/api/v1/references/learners/xml/' + this.state.word + '?key=67fa1c28-f1ac-4b66-a206-90aa0dcf2d34')
        //     .then(res => {
        //         this.setState({ data: res.data })
        //     })
        //     .then(() => {
        //         const wavFile = this.state.data.match(/<wav>(.+?)<\/wav>/)[1]
        //         this.setState({ audiosrc: 'http://media.merriam-webster.com/soundc11/' + wavFile[0] + '/' + wavFile })
        //     })
        //     .then(() => {
        //         const pron = this.state.data.match(/<pr>(.+?)<\/pr>/)[1]
        //         this.setState({ pron: pron })
        //     })
        //     .catch(console.error)
        // console.log("STATE", this.state)
    }

    render() {
        return (
            <div className="anim" id="pron-dict">
                <h1>Pronunciation</h1>
                <div id="pron-outline">
                    <form onSubmit={this.findWord}>
                        <div class="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" onChange={this.saveWord} value={this.state.word} type="text" placeholder="type a word" />
                            <button type="submit" id="look-up" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Look up word</button>
                        </div>
                    </form>
                    {
                        this.state.audiosrc &&
                        <div>
                            <audio id="pron-audio" controls>
                                <source src={this.state.audiosrc} />
                            </audio>
                            <h2 id="ipa">{this.state.pron}</h2>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default connect(null, {findWord})(PronDict)
