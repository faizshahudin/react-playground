import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

class Response extends Component {
    render() {
        let post = this.props.post;

        return (
            <div className="responseContainer">
                <div className="iconGroup">
                    <Glyphicon glyph="comment" />
                    <div>{post.comment}</div>
                </div>
                <div className="iconGroup">
                    <Glyphicon style={{ color: 'green' }} glyph="retweet" />
                    <div style={{ color: 'green' }}>{post.retweet}</div>
                </div>
                <div className="iconGroup">
                    <Glyphicon style={{ color: 'red' }} glyph="heart" />
                    <div style={{ color: 'red' }}>{post.like}</div>
                </div>
                <div className="iconGroup">
                    <Glyphicon glyph="envelope" />
                </div>
            </div>
        );
    }
}

export default Response;
