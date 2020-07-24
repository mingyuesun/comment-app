import React from 'react'
// import PropTypes from 'prop-types'
import { ThemeColorContext } from './context.js'

class Header extends React.Component {
	render () {
		return <div>
			<h2>This is Header</h2>
			<Title />
		</div>
	}
}

class Main extends React.Component {
	render () {
		return <div>
			<h2>This is main</h2>
			<Content />
		</div>
	}
}

class Title extends React.Component {

	/**
	 * static contextTypes = {
	 *   themeColor: PropTypes.string
	 * }
	 * static contextType = ThemeAnotherContext
	 */
	
	render () {
		return <h1 style={{ color: this.context }}>React.js 小书标题</h1>
	}
}
Title.contextType = ThemeColorContext

class Content extends React.Component {
	render () {
		return <h2>React.js 小书内容</h2>
	}
}

export {
	Header,
	Main,
	Title
}