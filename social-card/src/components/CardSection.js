import React, { Component } from 'react';
import { Glyphicon, Image } from 'react-bootstrap';

import Card from './Card';
import Response from './Response';
import profilePic from '../img/profileimage.jpg';

class CardSection extends Component {
    render() {
        return (
            <div className="headerContainer">
                <Image className="imgStyle" src={profilePic} circle />
                <div className="bodyContainer">
                    <div className="titleContainer">
                        <text><b>The Practical Dev</b> <font style={{ color: 'grey' }}>@ThePracticalDev &middot; Sep 10</font></text>
                        <Glyphicon glyph="chevron-down" />
                    </div>
                    <text>Learning React? Start Small.</text>
                    <text>&#123; author: <a>@dceddia</a>	&#125;</text>
                    <Card />
                    <Response />
                </div>
            </div>
        );
    }
}

export default CardSection;
