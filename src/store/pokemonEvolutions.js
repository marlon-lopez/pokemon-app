import { createSlice } from '@reduxjs/toolkit'
import { formatPokemonId, formatPokemonUrl } from '../utils'
import { getPokemonEvolutionById } from './api/api'

const slice = createSlice({
  name: 'evolutions',
  initialState: {
    evolutions: [],
  },
  reducers: {
    evolutionsReceived(state, action) {
      state.evolutions.push(action.payload)
    },
    resetEvolution(state, action) {
      state.evolutions = []
    },
  },
})
export const { evolutionsReceived, resetEvolution } = slice.actions

export const getPokemonEvolutions = (id) => async (dispatch, getState) => {
  dispatch(resetEvolution())
  const response = await getPokemonEvolutionById(id)

  //save the evolutions
  let data = [
    response.chain.species ? response.chain.species : {},

    response.chain && response.chain.evolves_to[0]
      ? response.chain.evolves_to[0].species
      : {},

    response.chain.evolves_to[0] && response.chain.evolves_to[0].evolves_to[0]
      ? response.chain.evolves_to[0].evolves_to[0].species
      : {},
  ]

  //change every evolution´s image for one with a better quality
  for (const [index, { name, url }] of data.entries()) {
    if (url) {
      const id = url.split('/')[6]
      const pokeImg = formatPokemonUrl(formatPokemonId(id))
      dispatch(evolutionsReceived({ name: name, img: pokeImg, id: id }))
    }
  }
}

export default slice.reducer
