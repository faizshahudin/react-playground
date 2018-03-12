import React, { Component } from 'react';
import { Glyphicon, Image } from 'react-bootstrap';

import Card from './Card';
import Response from './Response';

class CardSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let post = this.props.post;
        console.log(post);
        return (
            <div className="headerContainer">
                <Image className="imgStyle" src={post.profilePic} circle />
                <div className="bodyContainer">
                    <div className="titleContainer">
                        <text><b>{post.name}</b> <font style={{ color: 'grey' }}>{post.account} &middot; {post.date}</font></text>
                        <Glyphicon glyph="chevron-down" />
                    </div>
                    <text>{post.title}</text>
                    <text>&#123; author: <a>{post.author}</a>	&#125;</text>
                    <Card post={post} />
                    <Response post={post} />
                </div>
            </div>
        );
    }
}

export default CardSection;
