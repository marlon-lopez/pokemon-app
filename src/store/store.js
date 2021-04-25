import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'

import pokemons from './pokemons'
import cachedPokemons from './cachedPokemons'
import pokemonSpecies from './pokemonSpecies'
import pokemonEvolutions from './pokemonEvolutions'

const rootReducers = combineReducers({
  pokemons: pokemons,
  cachedPokemons: cachedPokemons,
  species: pokemonSpecies,
  evolutions: pokemonEvolutions,
})

const store = () => {
  return configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
      }),
  })
}
export default store
