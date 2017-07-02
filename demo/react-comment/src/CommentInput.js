import React, {Component} from 'react';

const INPUT_EMPTY = {
    user: '请输入用户名啊',
    content: '请输入内容啊'
};

class CommentInput extends Component {
    constructor () {
        super();

        this.state = {
            user: '',
            content: ''
        };
    }

    changeUser (e) {
        this.setState({
            user: e.target.value
        });
    }

    changeContent (e) {
        this.setState({
            content: e.target.value
        });
    }

    submitComment () {
        var val = this.testInput(this.state);
        if (val) {
            alert(val);
            return;
        }

        this.props.getComment(this.state);

        this.setState({
            content: ''
        });
    }

    testInput (obj) {
        for (let k in obj){
            if(!obj[k]){
                return INPUT_EMPTY[k];
            }
        }
    }

    render () {
        return (
            <div className="comment_input">
                <div className="comment_user">
                    <label htmlFor="user">用户名:</label>
                    <input id="user" value={this.state.user} onChange={this.changeUser.bind(this)} />
                </div>
                <div className="comment_content">
                    <label htmlFor="content">评论内容:</label>
                    <textarea id="content" value={this.state.content} onChange={this.changeContent.bind(this)} />
                </div>
                <input onClick={this.submitComment.bind(this)} className="comment_submit" type="button" value="发布" />
            </div>
        );
    }
}

export default CommentInput;