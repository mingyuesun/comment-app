import React from 'react'

class LikeButton extends React.Component {
	static defaultProps = {
		likedText: '取消',
		unLikedText: '点赞'
	}

	constructor(){
		super()
		this.state = {
			isLiked: false
		}
	}

	handleClickLikeButton(){
    this.setState({
			isLiked: !this.state.isLiked
		})
	}

	render(){
		return <button onClick={this.handleClickLikeButton.bind(this)}>
			{this.state.isLiked ? this.props.likedText : this.props.unLikedText}👍
		</button>
	}
}

export default LikeButton