// import random from 'lodash/number/random';
import React, { Component } from 'react';
import SpringScrollbars from './SpringScrollbars';

export default class CommentScroll extends Component {

    constructor(props, ...rest) {
        super(props, ...rest);
        this.handleClickRandomPosition = this.handleClickRandomPosition.bind(this);
    }

    handleClickRandomPosition() {
        const { scrollbars } = this.refs;
        const scrollHeight = scrollbars.getScrollHeight();
        scrollbars.scrollTop(random(scrollHeight));
    }

    render() {
        return (
            <div className="separated">
                <SpringScrollbars
                    ref="scrollbars"
                    style={{ height: 300 }}>
                  
                  <div className="comment-item">
                    <p>評論內容</p>
                  </div>
                  <div className="comment-item">
                    <p>評論內容</p>
                  </div>
                  <div className="comment-item">
                    <p>評論內容</p>
                  </div>
                  <div className="comment-item">
                    <p>評論內容</p>
                  </div>
                  <div className="comment-item">
                    <p>評論內容</p>
                  </div>
                  <div className="comment-item">
                    <p>評論內容</p>
                  </div>
                  <div className="comment-item">
                    <p>評論內容</p>
                  </div>
                </SpringScrollbars>
                <button
                    onClick={this.handleClickRandomPosition}
                    className="btn btn-primary">
                    <i className="fa fa-random"/> Random position
                </button>
                <p>
                    The Scrollbars are animated with <strong></strong>. You can simply animate the Scrollbars with <code>scrollbars.scrollTop(x)</code>. Don't forget to wrap your steps with <code>requestAnimationFrame</code>.
                </p>
            </div>
        );
    }
}