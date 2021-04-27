import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import {
  NavBar,
  SerchBar,
  Icon,
  PageLink,
  SearchBtn,
  SearchBox,
  Bars,
  NavMenu,
} from './Styles'
import { useHistory, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const history = useHistory()
  const [search, setSearch] = useState('')
  const [activeNav, setActiveNav] = useState(false)

  const activeNavBar = () => {
    if (!activeNav === true) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    setActiveNav(!activeNav)
  }
  useEffect(() => {
    if (activeNav) {
      activeNavBar(false)
    }
  }, [location])

  const submitHandler = (name) => {
    history.push(`/search-results/${name}`)
    setSearch('')
    if (activeNav) activeNavBar(false)
  }
  return (
    <NavBar>
      <Icon
        onClick={() => history.push('/')}
        title='Home'
        width='82'
        height='82'
        viewBox='0 0 82 82'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M41 0C18.3927 0 0 18.3927 0 41V42.3665H24.9972V39.6331H2.75709C3.47899 19.1627 20.3567 2.73347 41 2.73347C61.6433 2.73347 78.521 19.1627 79.2429 39.6335H56.8563V42.3669H82V41C82 18.3927 63.6073 0 41 0Z'
          fill='white'
        />
        <path
          d='M80.6335 39.6335H56.8563C56.1019 39.6335 55.4897 40.2457 55.4897 41.0001C55.4897 41.7544 56.1019 42.3666 56.8563 42.3666H79.2429C78.5214 62.8374 61.6437 79.2666 41 79.2666C20.3563 79.2666 3.47899 62.8374 2.75709 42.3666H25.5545C26.3089 42.3666 26.9211 41.7544 26.9211 41.0001C26.9211 40.2457 26.3089 39.6335 25.5545 39.6335H1.36653C0.612197 39.6335 0 40.2457 0 41.0001C0 63.6073 18.3927 82.0001 41 82.0001C63.6073 82.0001 82 63.6073 82 41.0001C82 40.2457 81.3878 39.6335 80.6335 39.6335Z'
          fill='white'
        />
        <path
          d='M40.9996 24.6001C31.9564 24.6001 24.5996 31.9569 24.5996 41.0001C24.5996 50.0433 31.9564 57.4001 40.9996 57.4001C50.0428 57.4001 57.3996 50.0433 57.3996 41.0001C57.3996 31.9569 50.0428 24.6001 40.9996 24.6001ZM40.9996 54.6666C33.4639 54.6666 27.3331 48.5359 27.3331 41.0001C27.3331 33.4643 33.4639 27.3336 40.9996 27.3336C48.5354 27.3336 54.6661 33.4643 54.6661 41.0001C54.6661 48.5359 48.5354 54.6666 40.9996 54.6666Z'
          fill='white'
        />
        <path
          d='M40.9999 30.0667C34.9716 30.0667 30.0664 34.9714 30.0664 41.0001C30.0664 47.0288 34.9712 51.9336 40.9999 51.9336C47.0286 51.9336 51.9333 47.0288 51.9333 41.0001C51.9333 34.9714 47.0282 30.0667 40.9999 30.0667ZM40.9999 49.2001C36.4783 49.2001 32.7999 45.5217 32.7999 41.0001C32.7999 36.4785 36.4783 32.8001 40.9999 32.8001C45.5215 32.8001 49.1999 36.4785 49.1999 41.0001C49.1999 45.5217 45.5215 49.2001 40.9999 49.2001Z'
          fill='white'
        />
      </Icon>
      <Bars
        onClick={() => activeNavBar(!activeNav)}
        active={activeNav}
        className='fas fa-bars'></Bars>
      <NavMenu active={activeNav}>
        <SearchBox initial={{ y: -250 }} animate={{ y: -10 }}>
          <SerchBar
            onChange={(e) => {
              setSearch(e.currentTarget.value)
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                submitHandler(search)
              }
            }}
            type='search'
            value={search}
            placeholder='Seach pokemon...'
          />
          <SearchBtn onClick={() => submitHandler(search)}>
            <i className='fas fa-search'></i>
          </SearchBtn>
        </SearchBox>
        <PageLink
          to={{
            pathname: '/favorites',
            state: { background: location },
          }}>
          <motion.i
            initial={{ scale: 2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 700 }}
            className='far fa-heart'
            title='favorite pokemons'
          />{' '}
          {activeNav === true ? 'Favorite' : ''}
        </PageLink>
      </NavMenu>
    </NavBar>
  )
}

export default Header
