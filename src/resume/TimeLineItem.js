import React, { Component} from 'react';

class TimeLineItem extends Component {
    render() {
        const {title,descpt,year,date} = this.props.resume
        return (
            <li>
                <div className="time">
                    <h4>{date}</h4>
                </div>
                <div className="content">
                    <h3>{title}</h3>
                    {descpt.map(item=>(<p key={item}>{item}</p>))}
                </div>
                
            </li>
        );
    }
}

export default TimeLineItem;