import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CommentApp from './containers/CommentApp.js'
import commentsReducer from './reducers/comment.js'
import './index.css'

const store = createStore(commentsReducer)

export default class CommentAppWithRedux extends React.Component {
	render () {
		return (
			<Provider store={store}>
				<CommentApp />
			</Provider>
		)
	}
}