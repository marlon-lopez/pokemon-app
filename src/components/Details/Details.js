import React, { useEffect } from 'react'
import {
  MainContainer,
  Triangle,
  InformationWrapper,
  Name,
  Specifications,
  Description,
  ImageWrapper,
  Evolutions,
  Card,
} from './Style'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getSinglePokemon } from '../../store/pokemons'
import { getPokemonSpecies } from '../../store/pokemonSpecies'

const Details = ({ match }) => {
  const dispatch = useDispatch()
  const { listPokemons } = useSelector((state) => state.pokemons)
  const { data } = useSelector((state) => state.species)
  const { id } = match.params
  const selectedPokemon = listPokemons.find(
    (pokemon) => pokemon.id === Number(id),
  )

  useEffect(() => {
    dispatch(getPokemonSpecies(id))
    console.log(data)
    if (!selectedPokemon) {
      dispatch(getSinglePokemon(id))
      console.log('shit wasnt loaded before')
    }
    return () => {
      console.log('cleaned')
    }
  }, [])

  return (
    <>
      {selectedPokemon ? (
        <MainContainer>
          <InformationWrapper>
            <Name>Charizard</Name>
            <Specifications>
              <p>capture rate: 5</p>
              <p>Wight - 53.kg</p>
              <p>Height - 2.5m</p>
            </Specifications>
            <Description>
              <h4>Bio</h4>
              <p>
                When the bulb on its back grows large, it appearsto lose the
                ability to stand on its hind legs.
              </p>
            </Description>
            <Triangle />

            <ImageWrapper>
              <img
                src='https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/006.png'
                alt=''
              />
            </ImageWrapper>
            <Evolutions>
              <Card>
                <img
                  src='https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/004.png'
                  alt=''
                />
              </Card>
              <Card>
                <img
                  src='https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/005.png'
                  alt=''
                />
              </Card>
            </Evolutions>
          </InformationWrapper>
        </MainContainer>
      ) : (
        <p> not working</p>
      )}
    </>
  )
}

export default Details
