import React, { Component } from 'react'
// import axios from 'axios'
import {getSpeeches} from '../actions/index.js'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Saved extends Component {
    componentDidMount() {
        this.props.getSpeeches()
    }
        render() {
        return (
            <div className="container anim">
                <h1>Hello here are your speeches</h1>
                {
                    this.props.saved && this.props.saved.map(speech => {
                       return <h3 key={speech.id}>{speech.id}. {speech.content}</h3>
                    })
                }
                <Link to="/write"><button className='mdl-button mdl-js-button mdl-button--raised'>Home</button></Link>
                <Link to="/"><button className='mdl-button mdl-js-button mdl-button--raised' >Splash</button></Link>
            </div>
        )
        }
}

const mapState = ({saved}) => ({saved: saved.speeches})
export default connect(mapState, {getSpeeches})(Saved)