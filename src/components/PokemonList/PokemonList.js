import React, { useEffect } from 'react'
import { loadPokemons, pokemonsReceived } from '../../store/pokemons'

import { Container } from '../../GlobalStyles'
import { Cards, LoadBtn } from './Styles'
import CardItem from '../CardItem/CardItem'
import { useDispatch, useSelector } from 'react-redux'

const PokemonList = () => {
  const dispatch = useDispatch()
  const { cache } = useSelector((state) => state.cachedPokemons)
  const { listPokemons } = useSelector((state) => state.pokemons)

  //clean the search and listPokemons so it renders again and load pokemons

  useEffect(() => {
    if (listPokemons.length < 6) {
      dispatch(loadPokemons(cache, pokemonsReceived, false))
    }
    return () => {}
  }, [])

  return (
    <>
      <Container>
        <Cards>
          {listPokemons &&
            listPokemons.map((pokemon) => (
              <CardItem
                image={pokemon.sprites.frontDefault}
                name={pokemon.name}
                types={pokemon.types}
                key={pokemon.id}
                id={pokemon.id}
              />
            ))}
        </Cards>
      </Container>

      {/* button is disable once the user reach last pokemon */}
      <LoadBtn
        disabled={listPokemons.length === cache.length}
        //load more pokemons
        onClick={() => {
          dispatch(loadPokemons(cache, pokemonsReceived, false))
        }}>
        Load More...
      </LoadBtn>
    </>
  )
}

export default PokemonList
