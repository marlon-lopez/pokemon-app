import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from '../../GlobalStyles'
import { Cards } from './Styles'
import CardItem from '../CardItem/CardItem'

const PokemonList = () => {
  const [image, setImage] = useState(null)
  const getData = async () => {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    setImage(data.sprites.front_default)
  }
  useEffect(() => {
    getData()
  }, [getData])
  return (
    <Container>
      <Cards>
        {image ? (
          <>
            <CardItem cosa={image} bgColor='#6CAF6E'></CardItem>
            <CardItem cosa={image} bgColor='#6CAF6E'></CardItem>
            <CardItem cosa={image} bgColor='#6CAF6E'></CardItem>
            <CardItem cosa={image} bgColor='#6CAF6E'></CardItem>
            <CardItem cosa={image} bgColor='#6CAF6E'></CardItem>
          </>
        ) : (
          <p> {image} nothing </p>
        )}
      </Cards>
    </Container>
  )
}

export default PokemonList
