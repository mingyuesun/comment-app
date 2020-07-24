import React from 'react'
import PropTypes from 'prop-types'

class ThemeSwitch extends React.Component {
	static propTypes = {
		themeColor: PropTypes.string,
		onSwitchColor: PropTypes.func
	}


	handleChangeThemeColor = (color) => {
		if (this.props.onSwitchColor) {
			this.props.onSwitchColor(color)
		}
	}

	render(){
		return (
			<div>
				<button style={{color: this.props.themeColor}} onClick={() => this.handleChangeThemeColor('red')}>red</button>
				<button style={{color: this.props.themeColor}} onClick={() => this.handleChangeThemeColor('blue')}>blue</button>
			</div>
		)
	}
}

export default ThemeSwitch