import React from 'react'
import { themes, ThemeContext } from './theme-context.js'
import ThemedButton from './themed-button.js'


function Toolbar(props){
	return <ThemedButton onClick={props.changeTheme}>change theme</ThemedButton>
}

class ContextComponent extends React.Component {
  constructor(props){
		super(props)
		this.state = {
			theme: themes.blue
		}
	}

	toggleTheme = () => {
		this.setState(state => ({
			theme: state.theme === themes.blue ? themes.green : themes.blue
		}))
	}

	render(){
		return (<div>
			<ThemeContext.Provider value={this.state.theme}>
				<Toolbar changeTheme={this.toggleTheme}/>
			</ThemeContext.Provider>
			<ThemedButton/>
		</div>)
	}
}

export default ContextComponent