import React, {Component} from 'react';

class Comment extends Component {
    render () {
        return (
            <div className="comment">
                <a href="javascript:;">{this.props.comment.user}:</a>
                <p>{this.props.comment.content}</p>
            </div>
        );
    }
}

class CommentList extends Component {
    render () {
        return (
            <div className="comment_list">
                {
                    this.props.commentList.map((item, index) => {
                        return <Comment comment={item} key={index} />
                    })
                }
            </div>
        );
    }
}

export {Comment};
export default CommentList;