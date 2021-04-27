export const formatPokemonId = (id) => {
  return id < 10 ? `00${id}` : id < 100 ? `0${id}` : id
}

export const formatPokemonUrl = (param) => {
  return `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${param}.png`
}

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
