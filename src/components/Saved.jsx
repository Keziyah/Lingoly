import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Saved extends Component {
    constructor() {
        super()

        this.state = {
            speeches: []
        }
    }

    componentDidMount() {
        axios.get('/api/speeches')
            .then(res => {
                this.setState({ speeches: res.data })
                console.log("DATA", res.data)
            })
            .catch(console.error)
    }

    render() {
        console.log("STATE", this.state)
        return (
            <div className="container anim">
                <h1>Hello here are your speeches</h1>
                {
                    this.state.speeches && this.state.speeches.map(speech => {
                       return <h3 key={speech.id}>{speech.id}. {speech.content}</h3>
                    })
                }
                <Link to="/write"><button className='mdl-button mdl-js-button mdl-button--raised'>Home</button></Link>
                <Link to="/"><button className='mdl-button mdl-js-button mdl-button--raised' >Splash</button></Link>
            </div>
        )
    }
}