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
const CardItem = ({ bgColor, cosa }) => {
  console.log(cosa)
  return (
    <Card bgColor={bgColor}>
      <Name>Magikarp</Name>
      <Image src={cosa} alt='d' />
      <InfoTags>
        <Type>Fuego</Type>
        <Type>Fuego</Type>
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
            fill='#60A162'
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
            fill='#60A162'
          />
        </LeftTriangle>
      </TriangleContainers>
    </Card>
  )
}

export default CardItem
