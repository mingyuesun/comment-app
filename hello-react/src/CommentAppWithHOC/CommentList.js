import React from 'react'
import Comment from './Comment.js'
import PropTypes from 'prop-types'

class CommentList extends React.Component {
	static propTypes = {
    commentList: PropTypes.array.isRequired
	}

	static defaultProps = {
		commentList: []
	}
	handleDeleteComment = (index) => {
   if (this.props.onDeleteComment) {
		 this.props.onDeleteComment(index)
	 }
	}
	render(){
		return <div className="comment-list">
		{this.props.list && this.props.list.length > 0 && this.props.list.map((comment, index) => <Comment comment={comment} key={index} onDeleteComment={this.handleDeleteComment}/>)}
	</div>
	}
}

export default CommentList