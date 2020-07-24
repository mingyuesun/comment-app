import React from 'react'
import PropTypes from 'prop-types'
import WrapperWithLoadData from './WrapperWithLoadData.js'

class CommentInput extends React.Component {
	static propTypes = {
		onSubmit: PropTypes.func,
		data: PropTypes.any,
		saveData: PropTypes.func.isRequired
	}

	constructor(props) {
		super(props)
		this.textarea = React.createRef()
		this.state = {
			username: props.data,
			content: ''
		}
	}

	componentDidMount () {
		this.textarea.current.focus()
	}

	handleUsernameChange = (e) => {
		this.setState({
			username: e.target.value
		})
	}

	handleUserContentChange = (e) => {
		this.setState({
			content: e.target.value
		})
	}

	submitComment = () => {
		if (this.props.onSubmit) {
			const { username, content } = this.state
			if (!username) return alert('请输入用户名！')
			if (!content) return alert('请输入评论内容！')
			this.props.onSubmit({ username, content, createdTime: +new Date() })
		}
		this.setState({
			content: ''
		})
	}

	handleUsernameBlur = (event) => {
		this.props.saveData(event.target.value)
	}

	render () {
		return <div className="comment-input">
			<div className="comment-field">
				<span className="comment-field-name">用户名：</span>
				<div className="comment-field-input"><input value={this.state.username} onChange={this.handleUsernameChange} onBlur={this.handleUsernameBlur} /></div>
			</div>
			<div className="comment-field">
				<span className="comment-field-name">评论内容：</span>
				<div className="comment-field-input"><textarea ref={this.textarea} value={this.state.content} onChange={this.handleUserContentChange} /></div>
			</div>
			<div className="comment-field-button">
				<button onClick={this.submitComment}>发布</button>
			</div>
		</div>
	}
}

CommentInput = WrapperWithLoadData(CommentInput, 'username')
export default CommentInput