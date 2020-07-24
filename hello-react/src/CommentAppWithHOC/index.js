import React from 'react'
import PropTypes from 'prop-types'
import WrapperWithLoadData from './WrapperWithLoadData.js'
import CommentList from './CommentList.js'
import CommentInput from './CommentInput.js'
import './index.scss'

class CommentApp extends React.Component {
	static propTypes = {
		data: PropTypes.any,
		saveData: PropTypes.func.isRequired
	}

	constructor(props) {
		super(props)
		this.state = {
			commentList: props.data || []
		}
	}

	onSubmit = (comment) => {
		const commentList = this.state.commentList
		commentList.push(comment)
		this.setState({commentList})
		this.props.saveData(commentList)
	}

	handleDeleteComment = (index) => {
		const { commentList } = this.state
		commentList.splice(index, 1)
		this.setState({commentList})
		this.props.saveData(commentList)
	}

	render () {
		return <div className="wrapper">
			<CommentInput onSubmit={this.onSubmit} />
			<CommentList list={this.state.commentList} onDeleteComment={this.handleDeleteComment}/>
		</div>
	}
}

CommentApp = WrapperWithLoadData(CommentApp, 'commentList')
export default CommentApp