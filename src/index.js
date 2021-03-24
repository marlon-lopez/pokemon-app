import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import GlobalStyles from './GlobalStyles'
import { Provider } from 'react-redux'
import configureStore from './store/store'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <GlobalStyles />
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
)
