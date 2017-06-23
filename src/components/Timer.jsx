import React, { Component } from 'react'

export default class Timer extends Component {
    constructor() {
        super()

        this.state = {
            time: null,
            start: null,
            paused: false
        }

        this.tick = this.tick.bind(this)
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    tick() {
        this.setState({ time: new Date() - this.state.start })
    }

    resetTimer() {
        clearInterval(this.timer)
        this.setState({ time: 0, start: null, paused: false })
    }

    startTimer() {
        this.timer = setInterval(this.tick, 1000)
        this.setState({ start: Date.now() })
    }

    stopTimer() {
        if (!this.state.paused) {
            this.setState({ paused: true })
            clearInterval(this.timer)
        } else {
            this.setState({ paused: false, start: Date.now() - this.state.time })
            this.timer = setInterval(this.tick, 1000)
        }
    }

    render() {
        let minutes = Math.round(this.state.time / 60000)
        if (minutes < 10) {
            minutes = "0" + Math.floor(this.state.time / 60000)
        }

        let seconds = Math.round(this.state.time / 1000)
        if (seconds > 59) {
            seconds = Math.round(this.state.time / 1000) - (minutes * 60)
        }

        return (
            <div id="timer" className="container">
                <div id="time-display">
                    <h1>{minutes}:{seconds < 10 ? "0" + seconds : seconds}</h1>
                </div>
                <div id="time-buttons">
                    <button onClick={this.startTimer}>Start</button>
                    <button onClick={this.stopTimer}>{this.state.paused ? "Resume" : "Pause"}</button>
                    <button onClick={this.resetTimer}>Reset</button>
                </div>
            </div>
        )
    }
}