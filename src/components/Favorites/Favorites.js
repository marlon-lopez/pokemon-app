import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Container, PokemonList, Item, CloseBtn } from './Style'
const Favorites = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { favPokemons, listPokemons } = useSelector((state) => state.pokemons)

  return (
    <Container>
      <PokemonList>
        <CloseBtn onClick={() => history.goBack()}>X</CloseBtn>
        <Item>
          <img
            src='https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png'
            alt=''
          />
          <p>Charmander</p>
        </Item>
        <Item>
          <img
            src='https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png'
            alt=''
          />
          <p>Charmander</p>
        </Item>
        <Item>
          <img
            src='https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png'
            alt=''
          />
          <p>Charmander</p>
        </Item>
      </PokemonList>
    </Container>
  )
}

export default Favorites
