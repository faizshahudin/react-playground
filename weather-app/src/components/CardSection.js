import _ from 'lodash';
import React, { Component } from 'react';

import sunny from '../img/sun.png';
import rainy from '../img/storm.png';
import cloudy from '../img/cloudy.png';
import snowy from '../img/snowy.png';

class CardSection extends Component {
    renderDay(day) {
        if (day === 'monday') {
            return (
                <text>Mon</text>
            );
        }

        if (day === 'tuesday') {
            return (
                <text>Tue</text>
            );
        }

        if (day === 'wednesday') {
            return (
                <text>Wed</text>
            );
        }

        if (day === 'thursday') {
            return (
                <text>Thu</text>
            );
        }

        if (day === 'friday') {
            return (
                <text>Fri</text>
            );
        }

        if (day === 'saturday') {
            return (
                <text>Sat</text>
            );
        }

        if (day === 'sunday') {
            return (
                <text>Sun</text>
            );
        }
    }

    renderImage(condition) {
        if (condition === 'cloudy') {
            return (
                <img className="imgStyle" src={cloudy} />
            );
        } else if (condition === 'rainy') {
            return (
                <img className="imgStyle" src={rainy} />
            );
        } else if (condition === 'sunny') {
            return (
                <img className="imgStyle" src={sunny} />
            );
        } else if (condition === 'snowy') {
            return (
                <img className="imgStyle" src={snowy} />
            );
        }
    }

    render() {
        let forecast = this.props.forecast;
        //console.log(forecast.temp_max);
        return (
            <div className="cardContainerStyle">
                {this.renderDay(null)}
                {this.renderImage(null)}
                <div className="tempStyle">
                    <text>{null}&deg; <font style={{ color: 'grey' }}>{null}&deg;</font></text>
                </div>
            </div>
        );
    }
}

export default CardSection;
