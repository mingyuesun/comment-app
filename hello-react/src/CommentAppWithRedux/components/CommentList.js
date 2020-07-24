import React from 'react'
import Comment from './Comment.js'
import PropTypes from 'prop-types'

class CommentList extends React.Component {
	static propTypes = {
		comments: PropTypes.array.isRequired
	}

	static defaultProps = {
		comments: []
	}

	handleDeleteComment = (index) => {
		console.log('index: ',index)
		if (this.props.onDeleteComment) {
			this.props.onDeleteComment(index)
		}
	}

	render () {
		return (
			<div className="comment-list">
				{this.props.comments && 
				 this.props.comments.length > 0 && 
				 this.props.comments.map((comment, index) => 
				   <Comment 
				     comment={comment} 
						 key={index} 
						 index={index}
				     onDeleteComment={this.handleDeleteComment} 
						/>
					)}
			</div>
		)
	}
}

export default CommentList