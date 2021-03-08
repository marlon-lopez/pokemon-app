import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home'
import './components/sassTest.scss'
const App = () => {
  return (
    <Router>
      <h1>Hello body</h1>
      <Link to='/home'>Home</Link>
      <Switch>
        <Route path='/home' exact component={Home} />
      </Switch>
    </Router>
  )
}

export default App
