import React from 'react'
import PropTypes from 'prop-types'
import { connect } from './react-redux.js'

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

const mapStateToProps = (state) => {
	return {
		themeColor: state.themeColor
	}
}

Header = connect(mapStateToProps)(Header)
export default Header