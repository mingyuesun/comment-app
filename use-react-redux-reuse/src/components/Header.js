import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component {
	static propTypes = {
		themeColor: PropTypes.string
	}

  render(){
		return (
			<div>
				<h1 style={{color: this.props.themeColor}}>React.js 小书</h1>
			</div>
		)
	}
}

export default Header