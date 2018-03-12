import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let post = this.props.post;

        return (
            <div className="cardContainer">
                <div className="cardHeader">
                    <img className="cardImage" src={post.cardPic} />
                </div>
                <div className="cardBody">
                    <text><b>{post.title}</b></text>
                    <text>{post.description} </text>
                    <text style={{ color: 'grey' }}>{post.website}</text>
                </div>
            </div>
        );
    }
}

export default Card;
