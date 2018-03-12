import React, { Component } from 'react';
import cardImage from '../img/1mdb.jpg';

class Card extends Component {
    render() {
        return (
            <div className="cardContainer">
                <div className="cardHeader">
                    <img className="cardImage" src={cardImage} />
                </div>
                <div className="cardBody">
                    <text><b>Learning React? Start Small.</b></text>
                    <text>Can't pry yourself away from the tutorials? 
                        The cure is to make tiny little experiment apps. </text>
                    <text style={{ color: 'grey' }}>dev.to</text>
                </div>
            </div>
        );
    }
}

export default Card;
