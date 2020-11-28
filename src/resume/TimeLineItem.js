import React, { Component} from 'react';

class TimeLineItem extends Component {
    render() {
        const {title,descpt,year,date} = this.props.resume
        return (
            <li>
                <div className="content">
                    <h3>{title}</h3>
                    <p>{descpt}</p>
                </div>
                <div className="time">
                    <h4>{date}</h4>
                </div>
            </li>
        );
    }
}

export default TimeLineItem;