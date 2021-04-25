import { getPokemonsByNameOrId } from './store/api/api'

export const formatPokemonId = (id) => {
  return id < 10 ? `00${id}` : id < 100 ? `0${id}` : id
}

export const formatPokemonUrl = (param) => {
  return `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${param}.png`
}

export const getUrlId = (url) => {
  console.log(url.split('/')[6])
}

/* export const changeImage = async (results) => {
  //change every pokemon's image for one with a better quality
  let obj
  for (const [index, { url }] of results.entries()) {
    const id = Number(url.split('/')[6])
    const pokemon = await getPokemonsByNameOrId(id)
    const pokemonImageUrl = formatPokemonUrl(formatPokemonId(id))

    obj = 
  }
  console.log(obj)
  return obj
} */

export const formatPokemonObj = (pokemon, pokemonImageUrl, index) => {
  return {
    pokemon: {
      ...pokemon,
      sprites: {
        frontDefault: pokemonImageUrl,
      },
    },
    index,
  }
}
