import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

class Response extends Component {
    render() {
        return (
            <div className="responseContainer">
                <div className="iconGroup">
                    <Glyphicon glyph="comment" />
                    <div>2</div>
                </div>
                <div className="iconGroup">
                    <Glyphicon style={{ color: 'green' }} glyph="retweet" />
                    <div style={{ color: 'green' }}>47</div>
                </div>
                <div className="iconGroup">
                    <Glyphicon style={{ color: 'red' }} glyph="heart" />
                    <div style={{ color: 'red' }}>190</div>
                </div>
                <div className="iconGroup">
                    <Glyphicon glyph="envelope" />
                </div>
            </div>
        );
    }
}

export default Response;
