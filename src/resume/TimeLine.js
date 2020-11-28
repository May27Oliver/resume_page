import React, { Component } from 'react';
import TimeLineItem from "./TimeLineItem"

class TimeLine extends Component {
    render() {
        const {resume} = this.props.resume;
        return (
            <div>
                <div className="timeline">
                    <ul>
                        {resume.map(item=>(<TimeLineItem resume = {item}></TimeLineItem>))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TimeLine;