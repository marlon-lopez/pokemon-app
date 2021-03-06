import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Cards = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  padding: 20px 40px;
  justify-content: center;
`
export const LoadBtn = styled.button`
  display: block;
  padding: 8px 16px;
  text-align: center;
  margin: 24px auto;
  border: none;
  background: #fc5862;
  color: #fff;
  font-size: 1rem;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;

  &:disabled {
    background: #a3a3a3;
    cursor: auto;
  }
`
