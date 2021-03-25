import axios from 'axios'
import { result } from 'lodash'

const createRequest = async (url, method) => {
  try {
    const response = await axios.request({
      baseURL: `https://pokeapi.co/api/v2`,
      url,
      method,
    })
    return response.data
  } catch (err) {
    console.error(err)
    throw new Error(err)
  }
}

export const getPokemons = async (limit, offset) => {
  return await createRequest(`/pokemon/?limit=${limit}&offset=${offset}`, 'GET')
}

export const getPokemonsByNameOrId = (param) => {
  return createRequest(`/pokemon/${param}`, 'GET')
}

export const getPokemonSpeciesById = (id) => {
  return createRequest(`/pokemon-species/${id}/`)
}
export const getPokemonEvolutionById = (id) => {
  return createRequest(`/evolution-chain/${id}/`)
}
