import React, { useEffect, useState } from 'react'
import { useLocation, Route, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getCachedPokemons } from './store/cachedPokemons'

import PokemonList from './components/PokemonList/PokemonList'
import Details from './components/Details/Details'
import Favorites from './components/Favorites/Favorites'
import Header from './components/Header/Header'
import SearchResults from './components/SearchResults/SearchResults'

const App = () => {
  const location = useLocation()
  const background = location.state && location.state.background
  const dispatch = useDispatch()
  const cachedPokemons = useSelector((state) => state.cachedPokemons)
  useEffect(() => {
    if (!cachedPokemons.cache.length) dispatch(getCachedPokemons())
    return () => {}
  }, [])
  return (
    <>
      {cachedPokemons.cache.length ? (
        <>
          <Header />
          <Switch location={background || location}>
            <Route path='/' exact component={PokemonList} />
            <Route path='/pokemons/:id' exact component={Details} />
            <Route
              path='/search-results/:search'
              exact
              component={SearchResults}
            />
          </Switch>
          {background && <Route path='/favorites' children={<Favorites />} />}
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default App
