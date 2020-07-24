import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment, initComments } from '../reducers/comment.js'
import CommentInput from '../components/CommentInput.js'

// CommentInputContainer
// 负责用户名的加载、保存，评论的发布
class CommentInputContainer extends React.Component {
	static propTypes = {
		username: PropTypes.any,
		onSubmit: PropTypes.func
	}

	constructor(){
		super()
		this.state = { username: '' }
	}

	componentWillMount(){
		// 初始化用户名
		this._loadUsername()
	}

	_loadUsername = () => {
		// 从 LocalStorage 加载 username
    // 然后可以在 render 方法中传给 CommentInput
		const username = localStorage.getItem('username')
		if (username) this.setState({ username })
	}

	_saveUsername = (username) => {
		// 根据 render 方法的 onUserNameInputBlur
    // 这个方法会在用户名输入框 blur 的时候的被调用，保存用户名
		localStorage.setItem('username', username)
	}

	handleSubmitComment = (comment) => {
		if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
		// 新增评论保存到 LocalStorage 中
		const { comments } = this.props
		const newComments = comments.concat(comment)
		localStorage.setItem('comments', JSON.stringify(newComments))
		// this.props.onSubmit 是 connect 传进来的
    // 会 dispatch 一个 action 去新增评论
		if (this.props.onSubmit) {
			this.props.onSubmit(newComments)
			this._loadComments()
		}
	}

	_loadComments = () => {
		let comments = localStorage.getItem('comments')
		comments = comments ? JSON.parse(comments) : []
		this.props.initComments(comments)
	}

	render(){
		return (
			<CommentInput  
				username={this.state.username} 
				onUsernameInputBlur={this._saveUsername}
				onSubmit={this.handleSubmitComment}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		comments: state.comments
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (comment) => {
			dispatch(addComment(comment))
		},
		initComments: (comments) => {
			dispatch(initComments(comments))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentInputContainer)
