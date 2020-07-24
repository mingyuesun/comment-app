import React from 'react'
import LikeButton from './LikeButton'

class Index extends React.Component {
	constructor(){
		super()
		this.state = {
			likedText: '取消',
			unLikedText: '点赞'
		}
	}

	handleChangeText(){
		this.setState({
			likedText: '已赞',
			unLikedText: '赞'
		})
	}

	render(){
		return (
			<div>
				<LikeButton likedText={this.state.likedText} unLikedText={this.state.unLikedText}/>
				<div>
					<button onClick={this.handleChangeText.bind(this)}>修改 words</button>
				</div>
			</div>
		)
	}
}

export default Index