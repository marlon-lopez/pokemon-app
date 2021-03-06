import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const NavBar = styled.nav`
  background: linear-gradient(to right, #fc5862, #fa5887);
  width: 100%;
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const SearchBox = styled(motion.div)`
  display: flex;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 0 8rem 0;
    padding: 0 2rem;
  }
`
export const SearchBtn = styled.button`
  color: white;
  font-size: 1rem;
  background: #e3350d;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
`
export const SerchBar = styled.input`
  border: none;
  width: 400px;
  font-size: 1rem;
  color: #919191;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  outline: none;
  padding: 0.5rem 1rem;
  @media screen and (max-width: 768px) {
  }
`
export const Icon = styled(motion.svg)`
  width: 2.5rem;
  cursor: pointer;
  transform-origin: 50%;
`
export const PageLink = styled(Link)`
  color: white;
  font-size: 2rem;
`

export const Bars = styled.i`
  z-index: 25;
  color: white;
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 2rem;
  transform: translate(-100%, 75%);
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`
export const NavMenu = styled.div`
  width: calc(100% - 2.5rem);
  display: flex;
  color: white;
  // justify-content: space-between;

  @media screen and (max-width: 768px) {
    transition: all ease 0.5s;
    z-index: 20;
    position: fixed;
    top: 0;
    right: 0;
    background: black;
    padding: 6rem 0 0 0;
    width: 100%;
    height: 100%;
    flex-direction: column;
    //justify-content: flex-start;
    align-items: center;
    transform: translateX(${({ active }) => (!active ? '100%' : '0%')});
    //display: none;
  }
`
