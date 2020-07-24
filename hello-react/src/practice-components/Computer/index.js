import React from 'react'

class Computer extends React.Component {
  constructor(){
		super()
		this.state = {
			status: 'off',
			showContent: '显示器关了'
		}
	}

	handleClick = () => {
		this.setState((prevState) => {
      return {
				status: prevState.status === 'off' ? 'on' : 'off',
				showContent: prevState.status === 'off' ? '显示器亮了' : '显示器关了'
			}
		})
	}

	render(){
		return (<div>
		  <div>
		<button onClick={this.handleClick}>{this.state.status === 'off' ? '关' : '开'}</button>
				<Screen showContent={this.state.showContent}/>
			</div>
		</div>)
	}
}

class Screen extends React.Component {
	static defaultProps = {
		showContent: '无内容'
	}

	render(){
	return <div>{this.props.showContent}</div>
	}
}

export default Computer