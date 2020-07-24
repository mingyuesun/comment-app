import { connect } from 'react-redux'
import Header from '../components/Header.js'

const mapStateToProps = (state) => {
	return {
		themeColor: state.themeColor
	}
}

export default connect(mapStateToProps)(Header)