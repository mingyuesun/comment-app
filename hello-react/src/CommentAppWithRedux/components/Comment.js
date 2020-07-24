import React from 'react'
import PropTypes from 'prop-types'

class Comment extends React.Component {
	static propTypes = {
		comment: PropTypes.object.isRequired,
		onDeleteComment: PropTypes.func,
    index: PropTypes.number
	}

	constructor() {
		super()
		this.state = {
			timeString: ''
		}
	}

	componentWillMount(){
    this._timer = setInterval(this._updateTimeString(), 5000)
	}

	componentDidMount () {
		this._updateTimeString()
	}

	componentWillUnmount () {
		clearInterval(this._timer)
	}

	_updateTimeString = () => {
		const { comment } = this.props
		const duration = (+new Date() - comment.createdTime) / 1000
		const timeString = duration > 60 ? `${Math.round(duration / 60)}分钟前` : `${Math.round(Math.max(duration, 1))}秒前`
		this.setState({ timeString })
	}

	_getProcessedContent = (content) => {
		return content
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;")
			.replace(/`([\S\s]+?)`/g, '<code>$1</code>')
	}

	handleDeleteComment = () => {
		if (this.props.onDeleteComment) {
			this.props.onDeleteComment(this.props.index)
		}
	}

	render () {
		const { comment } = this.props
		return <div className="comment">
			<div className="comment-user">
				<span className="comment-username">{comment.username}</span>:
		</div>
			{/* <p >{comment.content}</p> */}
			<p dangerouslySetInnerHTML={{
				__html: this._getProcessedContent(comment.content)
			}} />
			<span className="comment-createdtime">{this.state.timeString}</span>
			<span className="comment-delete" onClick={this.handleDeleteComment}>删除</span>
		</div>
	}
}

export default Comment
