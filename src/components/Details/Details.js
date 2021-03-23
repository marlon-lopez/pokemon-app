import React, { useEffect } from 'react'
import {
  MainContainer,
  InformationWrapper,
  Name,
  Description,
  ImageWrapper,
  Evolutions,
  Statistics,
  Card,
  Biography,
} from './Style'

import { useDispatch, useSelector } from 'react-redux'
import { getSinglePokemon } from '../../store/pokemons'
import { getPokemonSpecies, resetSpecies } from '../../store/pokemonSpecies'
import {
  getPokemonEvolutions,
  resetEvolution,
} from '../../store/pokemonEvolutions'

const Details = ({ match }) => {
  const dispatch = useDispatch()
  const { listPokemons } = useSelector((state) => state.pokemons)
  const { data } = useSelector((state) => state.species)
  const { evolutions } = useSelector((state) => state.evolutions)
  const { id } = match.params
  const selectedPokemon = listPokemons.find(
    (pokemon) => pokemon.id === Number(id),
  )
  const evolutionChainId = data.evolution_chain
    ? data.evolution_chain.url.split('/')[6]
    : null

  useEffect(() => {
    if (!evolutionChainId) dispatch(getPokemonSpecies(id))

    if (!selectedPokemon) {
      dispatch(getSinglePokemon(id))
    }

    return () => {
      dispatch(resetSpecies())
    }
  }, [])

  useEffect(() => {
    if (evolutionChainId) {
      dispatch(getPokemonEvolutions(evolutionChainId))
    }
    return () => {
      dispatch(resetEvolution())
    }
  }, [evolutionChainId])

  return (
    <>
      {selectedPokemon && evolutions ? (
        <MainContainer background='#912c36'>
          <InformationWrapper>
            <Name>{selectedPokemon.name}</Name>
            <Biography>
              <Statistics>
                <p>base experience - {selectedPokemon.base_experience}</p>
                <p>Weight - {selectedPokemon.weight}kg</p>
                <p>Height - {selectedPokemon.height}m</p>
              </Statistics>
              <Statistics>
                {selectedPokemon.stats.map((stat) => (
                  <p key={stat.stat.name}>
                    {stat.stat.name} -<span> {stat.base_stat}</span>
                  </p>
                ))}
              </Statistics>
            </Biography>
            <Description>
              <h4>Bio</h4>
              <p>
                When the bulb on its back grows large, it appearsto lose the
                ability to stand on its hind legs.
              </p>
            </Description>
          </InformationWrapper>
          <ImageWrapper>
            {/*  <Triangle /> */}
            <img src={selectedPokemon.sprites.frontDefault} alt='' />
            <Evolutions>
              {evolutions.map((pokemon) => (
                <Card key={pokemon.name}>
                  <img src={pokemon.img} alt={pokemon.name} />
                  <p>{pokemon.name}</p>
                </Card>
              ))}
            </Evolutions>
          </ImageWrapper>
        </MainContainer>
      ) : (
        <p> not working</p>
      )}
    </>
  )
}

export default Details
