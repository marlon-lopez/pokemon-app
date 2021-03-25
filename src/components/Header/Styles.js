import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBar = styled.nav`
  background: linear-gradient(to right, #fc5862, #fa5887);
  width: 100%;
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const SearchBox = styled.div`
  display: flex;
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
  color: #a9a9a9;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  outline: none;
  padding: 0.5rem 1rem;
`
export const Icon = styled.svg`
  width: 2.5rem;
  cursor: pointer;
`
export const PageLink = styled(Link)`
  color: white;
  font-size: 2rem;
`
