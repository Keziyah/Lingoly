import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Recorder from './Recorder'
import Timer from './Timer'
import SpeechWriter from './SpeechWriter'
import Grammar from './Grammar'
import PronDict from './PronDict'

class Home extends Component {
    constructor() {
        super()

        this.state = {
            shouldShowSpeechWriter: true, 
            shouldShoulPron: false, 
            grammar: false
        }

        this.toggleSpeechWriter = this.toggleSpeechWriter.bind(this)
        this.togglePron = this.togglePron.bind(this)
    }

    toggleSpeechWriter() {
        this.setState({shouldShowSpeechWriter: !this.state.shouldShowSpeechWriter, grammar: !this.state.grammar})
    }

    togglePron() {
        this.setState({shouldShoulPron: !this.state.shouldShoulPron})
    }

    render() {
        return (
            <div className="app anim">

                {/*Da Navbar*/}
                <nav className="navbar navbar-default" id="mynav">
                    <div className="container">
                        <div className="navbar-header">
                            <button onClick={this.toggleSpeechWriter} id="start-writing" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={{ visibility: this.state.shouldShowSpeechWriter ? "hidden" : "visible"}}>
                                 Start Writing
                            </button>
                            <button onClick={this.togglePron} id="show-pron" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                                {this.state.shouldShoulPron ? "Hide Dictionary" : "Show IPA Dictionary"}
                            </button>
                        </div>
                        <div className="navbar-header navbar-right">
                            <Link to="/saved"><button id="saved" className='mdl-button mdl-js-button mdl-button--raised'>View Saved</button></Link>
                            <Link to="/" onClick={() => window.location.reload()}>lingoly</Link>
                        </div>
                    </div>
                </nav>

                <div className="row">

                    <div className="col-md-3" id="controls">
                        <h3 id="recorder-header">Recorder</h3>
                        <Recorder />
                        <h3 id="timer-header">Timer</h3>
                        <Timer/>
                    </div>

                    <div className="col-md-8">
                        <div className="col-md-7">
                        {this.state.shouldShowSpeechWriter && <SpeechWriter checkGrammar={this.toggleSpeechWriter}/>}
                        {this.state.grammar && <Grammar transcript={this.props.draft}/>}
                        </div>
                        <div id="prondict" className="col-md-5">
                            {this.state.shouldShoulPron && <PronDict />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapState = ({draft}) => ({draft: draft.text})
export default connect(mapState, null)(Home)