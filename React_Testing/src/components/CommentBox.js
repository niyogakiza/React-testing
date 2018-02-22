import React, { Component }from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component{
    constructor(props){
        super();
        this.state = { comment: ''};
    }


    handleChange(event){
        this.setState({ comment: event.target.value })
    }
    handleSubmit(e){
        e.preventDefault();

        this.props.saveComment(this.state.comment);

        this.setState({ comment: ''});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
                <h3>Add a comment </h3>
                <textarea
                    value={this.state.comment}
                    onChange={this.handleChange.bind(this)}
                />
                <div>
                    <button action="submit"> Submit Comment</button>
                </div>

            </form>
        );
    }
}

export default connect(null,actions )(CommentBox);
