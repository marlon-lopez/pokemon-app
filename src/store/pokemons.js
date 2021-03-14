import { createSlice } from '@reduxjs/toolkit'

import { apiCallBegan } from './actions'

const slice = createSlice({
  name: 'pokemons',
  initialState: {
    listPokemons: [],
    favPokemons: [],
    capturedPokemons: [],
    loading: false,
  },

  reducers: {
    pokemonsRequested: (state, action) => {
      state.loading = true
    },
    pokemonsReceived: (state, action) => {
      state.loading = false
      state.listPokemons.push(action.payload)
    },
  },
})

export const { pokemonsRequested, pokemonsReceived } = slice.actions

export const loadPokemons = () => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: `/pokemon/ditto`,
      method: 'GET',
      onStart: pokemonsRequested,
      onSuccess: pokemonsReceived,
    }),
  )
}

export default slice.reducer
