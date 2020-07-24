import React from 'react'
// import PropTypes from 'prop-types'
import { Header, Main, Title } from './childrenComps.js'
import {ThemeColorContext} from './context.js'


class ThemeContext extends React.Component {
	/**
	  static childContextTypes = {
	    themeColor: PropTypes.string
		}
	*/

	constructor() {
		super()
		this.state = { themeColor: 'red' }
	}

	/**
	componentDidMount () {
		this.setState({ themeColor: 'lightblue'})
	}

	getChildContext = () => {
		return {themeColor: this.state.themeColor}
	}
	*/

	render () {
		return (
			<div>
				<ThemeColorContext.Provider value={this.state.themeColor}>
					<Header />
				</ThemeColorContext.Provider>
				<Title/>
				<Main />
			</div>
		)
	}
}

export default ThemeContext