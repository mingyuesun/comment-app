import React from 'react'
import { ThemeContext } from './theme-context.js'

class ThemedButton extends React.Component {
  render(){
		return (
			<button style={{backgroundColor: this.context.background}} {...this.props}></button>
		)
	}
}

ThemedButton.contextType = ThemeContext
export default ThemedButton