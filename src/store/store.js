import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'

import pokemons from './pokemons'
import cachedPokemons from './cachedPokemons'
import pokemonSpecies from './pokemonSpecies'

const rootReducers = combineReducers({
  pokemons: pokemons,
  cachedPokemons: cachedPokemons,
  species: pokemonSpecies,
})

const store = () => {
  return configureStore({
    reducer: rootReducers,
    middleware: getDefaultMiddleware(),
  })
}
export default store
