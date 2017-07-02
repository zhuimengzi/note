import React, {Component} from 'react';
import CommentList from './CommentList.js';
import CommentInput from './CommentInput.js';

class CommentApp extends Component {
    constructor () {
        super();

        this.state = {
            comments: []
        };
    }

    _loadComments () {
        var comments = localStorage.getItem('comments');
        comments && this.setState({comments: JSON.parse(comments)});
    }
    _saveComments () {
        localStorage.setItem('comments', JSON.stringify(this.state.comments));
    }
    getComment (comment) {
        this.state.comments.push(Object.assign(comment, {
            createTime: Date.now()
        }));
        this.setState({
            comments: this.state.comments
        });
        this._saveComments();
    }

    componentWillMount () {
        this._loadComments();
    }

    handleDeleteComment (index) {
        this.state.comments.splice(index, 1);
        this.setState({
            comments: this.state.comments
        });
        this._saveComments();
    }

    render () {
        return (
            <section className="comment_app">
                <CommentInput 
                    getComment={this.getComment.bind(this)}
                />
                {
                    this.state.comments.length 
                        ? <CommentList 
                            comments={this.state.comments} 
                            handleDeleteComment={this.handleDeleteComment.bind(this)}
                          />
                        : null
                }
            </section>
        );
    }
}

export default CommentApp;