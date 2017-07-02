import React, {Component} from 'react';
import CommentList from './CommentList.js';
import CommentInput from './CommentInput.js';

class CommentApp extends Component {
    constructor () {
        super();

        this.state = {
            commentList: []
        };
    }

    getComment (comment) {
        this.state.commentList.push(comment);
        this.setState({
            commentList: this.state.commentList
        });
    }

    render () {
        return (
            <section className="comment_app">
                <CommentInput getComment={this.getComment.bind(this)} />
                {
                    this.state.commentList.length ? 
                    <CommentList commentList={this.state.commentList} />
                    : null
                }
            </section>
        );
    }
}

export default CommentApp;