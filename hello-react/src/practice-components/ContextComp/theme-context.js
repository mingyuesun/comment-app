import React from 'react'

export const themes = {
  blue: {
		background:'lightblue'
	},
	green: {
		background: 'lightgreen'
	}
}

export const ThemeContext = React.createContext(themes.blue) // 默认值