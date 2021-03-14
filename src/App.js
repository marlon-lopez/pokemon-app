import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'

import PokemonList from './components/PokemonList/PokemonList'

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path='/'>
          <PokemonList color='red' />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
