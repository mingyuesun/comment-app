import React from 'react'
import ThemeSwitch from './ThemeSwitch.js'
import PropTypes from 'prop-types'

class Content extends React.Component {
	static propTypes = {
		themeColor: PropTypes.string,
		onSwitchColor: PropTypes.func
	}

	render(){
		return (
			<div>
				<p style={{color: this.props.themeColor}}>React.js 小书内容</p>
				<ThemeSwitch themeColor={this.props.themeColor} onSwitchColor={this.props.onSwitchColor}/>
			</div>
		)
	}
}

export default Content