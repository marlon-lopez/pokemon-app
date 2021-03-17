import { createSlice } from '@reduxjs/toolkit'
import { getPokemons } from './api/api'

const slice = createSlice({
  name: 'cachedPokemons',
  initialState: {
    cache: [],
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
  },
})

export const { toggleLoading, pokemonsCached } = slice.actions

export const getCachedPokemons = () => async (dispatch, getState) => {
  const { results } = await getPokemons('809')
  dispatch(toggleLoading())

  dispatch(pokemonsCached(results))
}

export default slice.reducer
