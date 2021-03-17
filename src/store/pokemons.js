import { createSlice } from '@reduxjs/toolkit'
import { getPokemonsByNameOrId } from './api/api'
import { formatPokemonId, formatPokemonUrl } from '../utils'
import axios from 'axios'

const slice = createSlice({
  name: 'pokemons',
  initialState: {
    listPokemons: [],
    favPokemons: [],
    capturedPokemons: [],
    loading: undefined,
  },

  reducers: {
    pokemonsReceived(state, action) {
      const { pokemon, index } = action.payload
      const alreadyExists = state.listPokemons.find(
        (existingPokemon) => existingPokemon.id === pokemon.id,
      )
      if (!alreadyExists) {
        state.listPokemons.push(pokemon)
      }
    },
  },
})

export const { pokemonsReceived } = slice.actions

export const loadPokemons = (cachedPokemons) => async (dispatch, getState) => {
  const size = getState().pokemons.listPokemons.length
  const results = cachedPokemons.slice(size, size + 6)

  console.log(results)

  for (const [index, { url }] of results.entries()) {
    const id = Number(url.split('/')[6])
    const pokemon = await getPokemonsByNameOrId(id)
    const pokemonImageUrl = formatPokemonUrl(formatPokemonId(id))

    dispatch(
      pokemonsReceived({
        pokemon: {
          ...pokemon,
          sprites: {
            frontDefault: pokemonImageUrl,
          },
        },
        index,
      }),
    )
  }
}

export default slice.reducer
