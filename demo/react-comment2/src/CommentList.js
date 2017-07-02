import React, {Component} from 'react';

const ESCAPEDHTML = [
    {
        reg: /&/g,
        target: '&amp;'
    },
    {
        reg: /</g,
        target: '&lt;'
    },
    {
        reg: />/g,
        target: '&gt;'
    },
    {
        reg: /"/g,
        target: '&quot;'
    },
    {
        reg: /'/g,
        target: '&#039;'
    },
    {
        reg: /`([\S\s]+?)`/,
        target: '<code>$1</code>'
    }
];

class Comment extends Component {
    constructor () {
        super();

        this.state = {
            timeString: null
        };
    }

    _updateTimeString () {
        var createTime = this.props.comment.createTime;
        var ms = (Date.now() - createTime) / 1000;
        this.setState({
            timeString: ms >= 60 
                ? `${Math.round(ms / 60)} 分钟前` 
                : `${Math.round(Math.max(ms, 1))} 秒前`
        });
    }

    _getProcessedContent (content) {
        ESCAPEDHTML.forEach((item) => {
            content = content.replace(item.reg, item.target);
        });
        return content;
    }

    componentWillMount () {
        this._updateTimeString();
        this.timer = setInterval(
            this._updateTimeString.bind(this),
            5000
        );
    }

    componentWillUnmount () {
        clearInterval(this.timer);
    }

    render () {
        var {comment} = this.props;
        return (
            <div className="comment">
                <a href="javascript:;">{comment.user}:</a>
                <p dangerouslySetInnerHTML={{
                    __html: this._getProcessedContent(comment.content)
                }}></p>
                <span>{this.state.timeString}</span>
                <a 
                    href="javascript:;"
                    onClick={this.props.handleDeleteComment.bind(this, this.props.index)}
                >删除</a>
            </div>
        );
    }
}

class CommentList extends Component {
    render () {
        return (
            <div 
                className="comment_list"
            >
                {
                    this.props.comments.map((item, index) => {
                        return <Comment 
                                    index={index} 
                                    comment={item} 
                                    key={index} 
                                    handleDeleteComment={this.props.handleDeleteComment.bind(this)} 
                                />
                    })
                }
            </div>
        );
    }
}

export {Comment};
export default CommentList;