import React, { useEffect } from 'react'
import { Container } from '../../GlobalStyles'
import { Cards, LoadBtn } from '../PokemonList/Styles'
import CardItem from '../CardItem/CardItem'
import { searchPokemonsByName, resetSearch } from '../../store/cachedPokemons'
import {
  loadPokemons,
  searchResultsReceived,
  resetSearchResults,
} from '../../store/pokemons'

import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

const SearchResults = ({ match }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { search } = useSelector((state) => state.cachedPokemons)
  const { searchResults } = useSelector((state) => state.pokemons)
  const searchName = match.params.search.toLowerCase()

  useEffect(() => {
    dispatch(searchPokemonsByName(searchName))
    return () => {
      dispatch(resetSearch())
      dispatch(resetSearchResults())
    }
  }, [searchName])

  useEffect(() => {
    if (search.length) {
      dispatch(loadPokemons(search, searchResultsReceived, true))
    }
  }, [search])

  return (
    <>
      <Container>
        <Cards>
          {searchResults &&
            searchResults.map((pokemon) => (
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

      <LoadBtn onClick={() => history.push('/')}>Go back</LoadBtn>

      {/* button is disable once it user reach all the pokemons */}
      <LoadBtn
        disabled={searchResults.length === search.length}
        onClick={() => {
          dispatch(loadPokemons(search, searchResultsReceived, true))
        }}>
        Load More...
      </LoadBtn>
    </>
  )
}

export default SearchResults
