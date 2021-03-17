import React from 'react'
import {
  Card,
  TriangleContainers,
  RightTriangle,
  LeftTriangle,
  Image,
  TextWrapper,
  Name,
  InfoTags,
  Type,
} from './Styles'
import colors from '../../data/colors'

const CardItem = ({ image, name, types, id }) => {
  return (
    <Card bgColor={colors[types[0].type.name].primary}>
      <Name>{name}</Name>
      <Image src={image} alt={name} />
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
