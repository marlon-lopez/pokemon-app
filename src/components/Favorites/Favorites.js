import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getFavoritePokemons } from '../../store/pokemons'
import { Container, PokemonList, Item, CloseBtn } from './Style'
const Favorites = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { pokemons } = useSelector((state) => state)
  const favorites = getFavoritePokemons(pokemons)
  useEffect(() => {
    console.log('rendered')
    return () => {
      console.log('dismounted')
    }
  }, [])
  return (
    <Container>
      <PokemonList>
        <CloseBtn onClick={() => history.goBack()}>X</CloseBtn>
        {favorites.length ? (
          favorites.map((fav) => (
            <Item key={fav.name}>
              <img src={fav.sprites.frontDefault} alt={fav.name} />
              <p>{fav.name}</p>
            </Item>
          ))
        ) : (
          <p>no favorite pokemons added yet</p>
        )}
      </PokemonList>
    </Container>
  )
}

export default Favorites
