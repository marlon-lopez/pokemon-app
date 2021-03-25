import React, { useEffect, useState } from 'react'
import { loadPokemons, resetPokemons } from '../../store/pokemons'
import { resetSearch } from '../../store/cachedPokemons'

import { Container } from '../../GlobalStyles'
import { Cards, LoadBtn } from './Styles'
import CardItem from '../CardItem/CardItem'
import { useDispatch, useSelector } from 'react-redux'

const PokemonList = () => {
  const dispatch = useDispatch()
  const { cache, search } = useSelector((state) => state.cachedPokemons)
  const { listPokemons } = useSelector((state) => state.pokemons)
  useEffect(() => {
    if (listPokemons.length < 6) {
      dispatch(loadPokemons(cache))
    }
    if (search) {
      dispatch(resetPokemons())
      dispatch(loadPokemons(search))
    }
    return () => {
      console.log('cleaned')
    }
  }, [search])
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
      <LoadBtn onClick={() => dispatch(loadPokemons(cache))}>
        {!search.length ? 'Load More...' : 'Go back'}
      </LoadBtn>
    </>
  )
}

export default PokemonList
