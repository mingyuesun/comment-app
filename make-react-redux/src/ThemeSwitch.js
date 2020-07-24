import React from 'react'
import PropTypes from 'prop-types'
import { connect } from './react-redux.js'

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

const mapStateToProps = (state) => {
	return {
		themeColor: state.themeColor
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onSwitchColor: (color) => {
			dispatch({type: 'CHANGE_COLOR', themeColor: color})
		}
	}
}

ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)
export default ThemeSwitch