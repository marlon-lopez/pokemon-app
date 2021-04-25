import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import FavBtn from '../FavBtn/FavBtn'
import {
  Card,
  TriangleContainers,
  RightTriangle,
  LeftTriangle,
  Image,
  Actions,
  Name,
  InfoTags,
  Type,
} from './Styles'
import colors from '../../data/colors'
import { favPokemonAdded, favPokemonRemoved } from '../../store/pokemons'

const CardItem = ({ image, name, types, id }) => {
  const [imgLoaded, setImgLoaded] = useState(false)
  /*   useEffect(() => {
    console.log('card mounted', name)
    console.log(imgLoaded)
    return () => {
      console.log('card dismounted')
    }
  }, []) */

  const history = useHistory()
  const dispatch = useDispatch()
  const { favPokemons } = useSelector((state) => state.pokemons)

  const favAction = (id) => {
    console.log('clickedd')
    if (favPokemons)
      return !favPokemons.includes(id)
        ? dispatch(favPokemonAdded(id))
        : dispatch(favPokemonRemoved(id))
  }

  return (
    <Card bgColor={colors[types[0].type.name].primary}>
      <Actions>
        <Name>{name}</Name>
        <FavBtn
          isFavorite={favPokemons.includes(id)}
          action={() => favAction(id)}
        />
      </Actions>
      <Image
        src={image}
        alt={name}
        onClick={() => history.push(`/pokemons/${id}`)}
        whileHover={{ scale: 1.1 }}
      />
      <InfoTags>
        {types.map((type) => (
          <Type key={type.type.name} color={colors[type.type.name]}>
            {type.type.name}
          </Type>
        ))}
      </InfoTags>
      <TriangleContainers>
        <RightTriangle
          width='251'
          height='397'
          viewBox='0 0 251 397'
          fill='#1111'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M3.53625e-05 -8.00002L0 396.5L251 170L3.53625e-05 -8.00002Z'
            fill={colors[types[0].type.name].secondary}
          />
        </RightTriangle>
        <LeftTriangle
          width='251'
          height='397'
          viewBox='0 0 251 397'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M3.53625e-05 -8.00002L0 396.5L251 170L3.53625e-05 -8.00002Z'
            fill={colors[types[0].type.name].secondary}
          />
        </LeftTriangle>
      </TriangleContainers>
    </Card>
  )
}

export default CardItem
