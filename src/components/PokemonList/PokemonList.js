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

  //clean the search and listPokemons so it renders again and load pokemons
  const loadPokemonList = () => {
    dispatch(resetSearch())
    dispatch(resetPokemons())
  }

  useEffect(() => {
    if (!search.length && listPokemons.length < 6) {
      dispatch(loadPokemons(cache))
    }

    if (search.length) {
      dispatch(resetPokemons())
      dispatch(loadPokemons(search))
    }
    return () => {}
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
      {search.length ? (
        <LoadBtn onClick={() => loadPokemonList()}>Go back</LoadBtn>
      ) : (
        ''
      )}
      {/* button is disable once it user reach all the pokemons */}
      <LoadBtn
        disabled={
          search.length === listPokemons.length ||
          listPokemons.length === cache.length
        }
        /* load search or cached pokemos  */
        onClick={() => {
          search.length && listPokemons.length !== search.length
            ? dispatch(loadPokemons(search))
            : dispatch(loadPokemons(cache))
        }}>
        Load More...
      </LoadBtn>
    </>
  )
}

export default PokemonList
