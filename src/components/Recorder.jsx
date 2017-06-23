import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setBlob} from '../actions'
import { ReactMic } from './react-mic/src';
import AudioFiles from './AudioFiles'


//Based on the ReactMic example
class Recorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
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
    this.props.setBlob(recordedBlob)
  }

  render() {
    console.log("RECORDER STORE", this.props.recorder)
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

        <AudioFiles files={this.props.recorder.blobs} />
      </div>
    );
  }
}

const mapState = ({recorder}) => ({recorder})
export default connect(mapState, {setBlob})(Recorder)

