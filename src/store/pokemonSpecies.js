import { createSlice } from '@reduxjs/toolkit'
import { getPokemonSpeciesById } from '../store/api/api'

const slice = createSlice({
  name: 'species',
  initialState: {
    data: {},
    loading: false,
  },

  reducers: {
    pokemonSpeciesReceived(state, action) {
      state.data = action.payload
    },
    resetSpecies(state, action) {
      state.data = []
    },
  },
})

export const { pokemonSpeciesReceived, resetSpecies } = slice.actions

export const getPokemonSpecies = (id) => async (dispatch, getState) => {
  const data = await getPokemonSpeciesById(id)
  dispatch(pokemonSpeciesReceived(data))
}

export default slice.reducer
