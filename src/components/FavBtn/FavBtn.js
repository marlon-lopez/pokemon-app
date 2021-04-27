import React from 'react'
import { Heart } from './Style'
import { motion } from 'framer-motion'

const FavBtn = ({ isFavorite, action }) => {
  return (
    <Heart onClick={action} title='Add to favorites'>
      <motion.i
        whileTap={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 400 }}
        className={isFavorite ? 'fas fa-heart' : 'far fa-heart'}
      />
    </Heart>
  )
}

export default FavBtn
