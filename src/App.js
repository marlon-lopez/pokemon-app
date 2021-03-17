import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loadPokemons } from './store/pokemons'
import { getCachedPokemons } from './store/cachedPokemons'
import GlobalStyles from './GlobalStyles'

import PokemonList from './components/PokemonList/PokemonList'

const App = () => {
  const dispatch = useDispatch()
  const cachedPokemons = useSelector((state) => state.cachedPokemons)

  useEffect(() => {
    if (!cachedPokemons.cache.length) dispatch(getCachedPokemons())
    return () => {
      console.log('re-rendered')
    }
  }, [])
  return (
    <>
      {cachedPokemons.cache.length === 0 ? (
        <h2>loading...</h2>
      ) : (
        <Router>
          <GlobalStyles />
          <Switch>
            <Route path='/'>
              <PokemonList />
            </Route>
          </Switch>
        </Router>
      )}
    </>
  )
}

export default App
