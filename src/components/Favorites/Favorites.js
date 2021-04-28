import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { getFavoritePokemons } from '../../store/pokemons'
import { Container, PokemonList, Item, CloseBtn } from './Style'
import { AnimatePresence } from 'framer-motion'

const Favorites = () => {
  const history = useHistory()
  const location = useLocation()
  const { cache } = useSelector((state) => state.cachedPokemons)
  const { favPokemons } = useSelector((state) => state.pokemons)
  const favorites = getFavoritePokemons(cache, favPokemons)
  let showModal = location.pathname.includes('/favorites')

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflowY = 'auto'
    }
  }, [showModal])
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <Container>
          <PokemonList
            key={location.pathname}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{
              scale: 0,
              transition: {
                delay: 2,
                duration: 5,
              },
            }}>
            <CloseBtn
              onClick={() => {
                history.goBack()
              }}>
              X
            </CloseBtn>
            {favorites.length ? (
              favorites.map((fav) => (
                <Item key={fav.name}>
                  <img src={fav.url} alt={fav.name} />
                  <p>{fav.name}</p>
                </Item>
              ))
            ) : (
              <p>no favorite pokemons added yet</p>
            )}
          </PokemonList>
        </Container>
      )}
    </AnimatePresence>
  )
}

export default Favorites
