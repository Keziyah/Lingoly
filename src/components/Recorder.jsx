import React, { Component } from 'react'
import { ReactMic } from './react-mic/src';
import AudioFiles from './AudioFiles'


//Based on the ReactMic example
export default class Recorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      blobs: []
    }
    this.onStop = this.onStop.bind(this)
  }

  startRecording = () => {
    this.setState({
      record: true
    });
  }

  stopRecording = () => {
    this.setState({
      record: false
    });
  }

  onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
    if (this.state.blobs.length === 3) {
      this.state.blobs.shift()
    }
    this.setState({ blobs: this.state.blobs.concat(recordedBlob) })
  }

  render() {
    return (
      <div id="recorder">
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          strokeColor="#000000"
          backgroundColor="#4e5368" />
        <div className="recorder-controls">
          <button id="start-recording" onClick={this.startRecording} type="button">Start</button>
          <button id="stop-recording" onClick={this.stopRecording} type="button">Stop
          </button>
        </div>

        <AudioFiles files={this.state.blobs} />
      </div>
    );
  }
}

