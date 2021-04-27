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
import FavBtn from '../FavBtn/FavBtn'
import colors from '../../data/colors'
import { useDispatch, useSelector } from 'react-redux'
import { getSinglePokemon } from '../../store/pokemons'
import { getPokemonSpecies, resetSpecies } from '../../store/pokemonSpecies'
import {
  getPokemonEvolutions,
  resetEvolution,
} from '../../store/pokemonEvolutions'
import { favPokemonAdded, favPokemonRemoved } from '../../store/pokemons'

import { useHistory, useLocation } from 'react-router-dom'

const Details = ({ match }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  let location = useLocation()
  const { listPokemons, favPokemons } = useSelector((state) => state.pokemons)
  const { data } = useSelector((state) => state.species)
  const { evolutions } = useSelector((state) => state.evolutions)
  const { id } = match.params
  const selectedPokemon = listPokemons.find(
    (pokemon) => pokemon.id === Number(id),
  )

  const evolutionChainId = data.evolution_chain
    ? data.evolution_chain.url.split('/')[6]
    : null

  const favAction = (id) => {
    if (favPokemons)
      return !favPokemons.includes(id)
        ? dispatch(favPokemonAdded(id))
        : dispatch(favPokemonRemoved(id))
  }

  useEffect(() => {
    if (!selectedPokemon) {
      dispatch(getSinglePokemon(id))
    }
    if (!evolutionChainId) dispatch(getPokemonSpecies(id))

    return () => {
      dispatch(resetSpecies())
    }
  }, [location])

  useEffect(() => {
    if (evolutionChainId) {
      dispatch(getPokemonEvolutions(evolutionChainId))
    }
    return () => {
      dispatch(resetEvolution())
    }
  }, [evolutionChainId, location])

  return (
    <>
      {selectedPokemon && evolutions ? (
        <MainContainer
          background={colors[selectedPokemon.types[0].type.name].primary}>
          <InformationWrapper>
            <FavBtn
              isFavorite={favPokemons.includes(Number(id))}
              action={() => favAction(Number(id))}
            />
            <Name>{selectedPokemon.name}</Name>
            <Name>{favPokemons.includes(Number(id))}</Name>
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
                <Card
                  key={pokemon.name}
                  background={
                    colors[selectedPokemon.types[0].type.name].secondary
                  }
                  onClick={() => history.push(`/pokemons/${pokemon.id}`)}>
                  <img src={pokemon.img} alt={pokemon.name} />
                  <p>{pokemon.name}</p>
                </Card>
              ))}
            </Evolutions>
          </ImageWrapper>
        </MainContainer>
      ) : null}
    </>
  )
}

export default Details
