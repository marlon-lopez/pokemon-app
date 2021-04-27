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
import { useHistory, useLocation } from 'react-router'

const SearchResults = ({ match }) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()
  const { search } = useSelector((state) => state.cachedPokemons)
  const { searchResults } = useSelector((state) => state.pokemons)
  const searchName = match.params.search

  useEffect(() => {
    console.log('search', searchName)
    dispatch(searchPokemonsByName(searchName))
    /* return () => {
      console.log('reset search ')
      dispatch(resetSearch())
      dispatch(resetSearchResults())
    } */
  }, [searchName])

  useEffect(() => {
    if (search.length) {
      console.log('save in search results')
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
        /* load search or cached pokemos  */
        onClick={() => {
          dispatch(loadPokemons(search, searchResultsReceived, true))
        }}>
        Load More...
      </LoadBtn>
    </>
  )
}

export default SearchResults
