import { createSlice } from '@reduxjs/toolkit'
import { getPokemonsByNameOrId, getPokemonSpecies } from './api/api'
import { formatPokemonId, formatPokemonUrl, formatPokemonObj } from '../utils'

const slice = createSlice({
  name: 'pokemons',
  initialState: {
    listPokemons: [],
    favPokemons: [],
    searchResults: [],
    loading: false,
  },

  reducers: {
    toggleLoading(state, action) {
      state.loading = !state.loading
    },
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
      state.loading = false
    },
    favPokemonAdded(state, action) {
      state.favPokemons.push(action.payload)
    },
    favPokemonRemoved(state, action) {
      state.favPokemons = state.favPokemons.filter(
        (pokemon) => pokemon !== action.payload,
      )
    },
    resetPokemons(state, action) {
      state.listPokemons = []
    },
    resetSearchResults(state, action) {
      state.searchResults = []
    },
    searchResultsReceived(state, action) {
      const { pokemon } = action.payload
      state.searchResults.push(pokemon)
    },
  },
})

export const {
  toggleLoading,
  pokemonsReceived,
  resetPokemons,
  singlePokemonReceived,
  favPokemonAdded,
  favPokemonRemoved,
  searchResultsReceived,
  resetSearchResults,
} = slice.actions

export const loadPokemons = (cachedPokemons, action, search) => async (
  dispatch,
  getState,
) => {
  let size = search
    ? getState().pokemons.searchResults.length
    : getState().pokemons.listPokemons.length

  //if a pokemon is already in the array delete it and set the size to 0
  if (size > 0 && size < 5) {
    dispatch(resetPokemons())
    size--
  }
  //get the next 6 pokemons
  const results = cachedPokemons.slice(size, size + 6)

  //set the loading status to true because it will be loading pokemon details
  dispatch(toggleLoading())
  //change every pokemon's image for one with a better quality
  for (const [index, { url }] of results.entries()) {
    const id = Number(url.split('/')[6])
    const pokemon = await getPokemonsByNameOrId(id)
    const pokemonImageUrl = formatPokemonUrl(formatPokemonId(id))

    dispatch(action(formatPokemonObj(pokemon, pokemonImageUrl, index)))
  }
  dispatch(toggleLoading())
}

export const getSinglePokemon = (id) => async (dispatch, getState) => {
  const pokemon = await getPokemonsByNameOrId(id)
  const pokemonImageUrl = formatPokemonUrl(formatPokemonId(id))
  dispatch(toggleLoading())

  dispatch(
    singlePokemonReceived(formatPokemonObj(pokemon, pokemonImageUrl, id)),
  )
}

export const getFavoritePokemons = (cache, favPokemons) => {
  const result = []
  favPokemons.forEach((id) => {
    let pokemonObj = { ...cache[id - 1] }
    pokemonObj.url = formatPokemonUrl(formatPokemonId(id))
    result.push(pokemonObj)
  })
  return result
}

export default slice.reducer
