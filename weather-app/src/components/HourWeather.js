import React, { Component } from 'react';

class HourWeather extends Component {
    render() {
        let day = this.props.day;

        return (
            <div>{day}</div>
        );
    }
}

export default HourWeather;
