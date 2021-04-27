import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PokemonList = styled(motion.div)`
  position: relative;
  width: 70%;
  height: 70vh;
  background: white;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  row-gap: 2rem;
  padding: 3rem 3rem;
  overflow-y: auto;
`
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
  }
  p {
    font-size: 1.2rem;
    padding-top: 1rem;
  }
`

export const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  color: white;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 9px;
  background: #fc5862;
  cursor: pointer;
`
