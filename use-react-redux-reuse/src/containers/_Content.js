import { connect } from 'react-redux'
import Connect from '../components/Content.js'

const mapStateToProps = (state) => {
	return { themeColor: state.themeColor }
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSwitchColor: (color) => dispatch({type: 'CHANGE_COLOR', themeColor: color})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Connect)
