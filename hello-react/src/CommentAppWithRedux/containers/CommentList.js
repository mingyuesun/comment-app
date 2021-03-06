import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentList from '../components/CommentList.js'
import { initComments, deleteComment } from '../reducers/comment.js'

// CommentListContainer
// 一个 Smart 组件，负责评论列表数据的加载、初始化、删除评论
// 沟通 CommentList 和 state
class CommentListContainer extends React.Component {
  static propTypes = {
		comments: PropTypes.array,
		initComments: PropTypes.func,
		deleteComment: PropTypes.func
	}

	componentWillMount(){
		// 初始化评论
    this._loadComments()
	}

	_loadComments = () => {
		// 从 LocalStorage 中加载评论
		let comments = localStorage.getItem('comments')
		comments = comments ? JSON.parse(comments) : []
		// this.props.initComments 是 connect 传进来的
    // 可以把数据初始化到 state 里面去
		this.props.initComments(comments)
	}

	handleDeleteComment = (commentIndex) => {
		const {comments} = this.props
		// props 是不能变的，所以这里新建一个删除了特定下标的评论列表
		const newComments = [...comments.splice(0, commentIndex), ...comments.splice(commentIndex+1)]
		// 保存最新的评论列表到 LocalStorage
		localStorage.setItem('comments', JSON.stringify(newComments))
		if (this.props.deleteComment){
			// this.props.deleteComment 是 connect 传进来的
			// 会 dispatch 一个 action 去删除评论
			this.props.deleteComment(commentIndex)
			this._loadComments()
		}
	}

	render(){
		return <CommentList comments={this.props.comments} onDeleteComment={this.handleDeleteComment}/>
	}
}

// 评论列表从 state.comments 中获取
const mapStateToProps = (state) => {
	return {comments: state.comments}
}

const mapDispatchToProps = (dispatch) => {
  return {
		// 提供给 CommentListContainer
    // 当从 LocalStorage 加载评论列表以后就会通过这个方法
    // 把评论列表初始化到 state 当中
		initComments: (comments) => {
			dispatch(initComments(comments))
		},
		// 删除评论
		deleteComment: (commentIndex) => {
			dispatch(deleteComment(commentIndex))
		}
	}
}

// 将 CommentListContainer connect 到 store
// 会把 comments、initComments、onDeleteComment 传给 CommentListContainer
export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer)