import React, { Component } from 'react';
import resum from "./resum.json" 
import TimeLine from './TimeLine'
import './style/style.css'

class App extends Component {
    render() {
        return (
            <div className="resume">
                <div className="education wrap">
                    <TimeLine resume={resum}></TimeLine>
                </div>
            </div>
        );
    }
}

export default App;