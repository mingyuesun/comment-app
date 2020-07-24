import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './Header.js'
import Content from './Content.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const themeReducer = (state, action) => {
  if (!state) {
    return { themeColor: 'red' }
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}

const store = createStore(themeReducer)
class Index extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>
  , document.getElementById('root')
);

