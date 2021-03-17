import React, { useEffect, useState } from 'react'
import { loadPokemons } from '../../store/pokemons'

import { Container } from '../../GlobalStyles'
import { Cards, LoadBtn } from './Styles'
import CardItem from '../CardItem/CardItem'
import { useDispatch, useSelector } from 'react-redux'

const PokemonList = () => {
  const dispatch = useDispatch()
  const { cache } = useSelector((state) => state.cachedPokemons)
  const { listPokemons } = useSelector((state) => state.pokemons)
  useEffect(() => {
    dispatch(loadPokemons(cache))
    return () => {
      console.log('cleaned')
    }
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
      <LoadBtn onClick={() => dispatch(loadPokemons(cache))}>
        Load More...
      </LoadBtn>
    </>
  )
}

export default PokemonList
