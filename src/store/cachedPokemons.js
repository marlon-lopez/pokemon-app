import { createSlice } from '@reduxjs/toolkit'
import { getPokemons } from './api/api'

const slice = createSlice({
  name: 'cachedPokemons',
  initialState: {
    cache: [],
    search: [],
    loading: false,
  },
  reducers: {
    toggleLoading(state, action) {
      state.loading = !state.loading
    },
    pokemonsCached(state, action) {
      state.cache = action.payload
      slice.caseReducers.toggleLoading(state)
    },
    searchedPokemons(state, action) {
      // console.log('payload ', action.payload)
      state.search = action.payload
      //console.log(state.search)
    },
    resetSearch(state) {
      state.search = []
    },
  },
})

export const {
  toggleLoading,
  pokemonsCached,
  searchedPokemons,
  resetSearch,
} = slice.actions

export const getCachedPokemons = () => async (dispatch, getState) => {
  const { results } = await getPokemons('809')
  dispatch(toggleLoading())

  dispatch(pokemonsCached(results))
}

export const searchPokemonsByName = (name) => (dispatch, getState) => {
  const {
    cache,
  } = getState().cachedPokemons /*  console.log(
    'cache filtered',
    cache.filter((poke) => poke.name.includes(name)),
  ) */
  /*   console.log('cache', cache)
  console.log('filter', cache.filter)
 */ const result = cache.filter(
    (pokemon) => pokemon.name.includes(name),
  )

  //console.log('search in cache', result)
  dispatch(searchedPokemons(result))
}

export default slice.reducer
