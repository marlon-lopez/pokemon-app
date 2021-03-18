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
    singlePokemonReceived(state, action) {
      const { pokemon } = action.payload
      state.listPokemons.push(pokemon)
    },
    resetPokemons(state, action) {
      state.listPokemons = []
    },
  },
})

export const {
  pokemonsReceived,
  resetPokemons,
  singlePokemonReceived,
} = slice.actions

export const loadPokemons = (cachedPokemons) => async (dispatch, getState) => {
  let size = getState().pokemons.listPokemons.length

  //if a pokemon is already in the array delete it and set the size to 0
  if (size > 0 && size < 5) {
    dispatch(resetPokemons())
    size--
  }

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

export const getSinglePokemon = (id) => async (dispatch, getState) => {
  const pokemon = await getPokemonsByNameOrId(id)
  const pokemonImageUrl = formatPokemonUrl(formatPokemonId(id))

  dispatch(
    singlePokemonReceived({
      pokemon: {
        ...pokemon,
        sprites: {
          frontDefault: pokemonImageUrl,
        },
      },
    }),
  )
}

export default slice.reducer
