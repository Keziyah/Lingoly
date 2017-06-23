import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            listening: false
        }

        this.listenAndWrite = this.listenAndWrite.bind(this)
    }

    listenAndWrite() {
        this.setState({ listening: !this.state.listening })
    }

    render() {
        return (
            <div className="homepage-hero-module">
                <div className="video-container">
                    <div className="filter"></div>
                    <video autoPlay loop className="fillWidth">
                        <source src="pencil_down.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                        <source src="pencil_down.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
                    </video>
                    <div className="poster hidden">
                        <img src="pencil_down.jpg" alt="Someone erasing with a pencil" />
                    </div>
                    <div id="overlay">
                        <div className="container" id="homepage">
                            <h1 id="lingoly">lingoly</h1>
                            <h3 id="header-tag">A speechwriting app for language learners.</h3>
                            <Link to="/write"><button id="start-here">Write something amazing</button></Link>
                        </div>
                    </div>
                    </div>
                    </div>
            )
    }
}

export default App
