import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Main from './containers/main'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);