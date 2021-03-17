import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'

import pokemons from './pokemons'
import cachedPokemons from './cachedPokemons'

const rootReducers = combineReducers({
  pokemons: pokemons,
  cachedPokemons: cachedPokemons,
})

const store = () => {
  return configureStore({
    reducer: rootReducers,
    middleware: getDefaultMiddleware(),
  })
}
export default store
