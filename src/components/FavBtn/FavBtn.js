import React from 'react'
import { Heart } from './Style'

const FavBtn = ({ isFavorite, action }) => {
  return (
    <Heart onClick={action} title='Add to favorites'>
      {isFavorite ? (
        <i className='fas fa-heart' />
      ) : (
        <i className='far fa-heart' />
      )}
    </Heart>
  )
}

export default FavBtn
