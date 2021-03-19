import styled from 'styled-components'
import { Container } from '../../GlobalStyles'

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* max-width: 1920px;
  max-height: 1080px; */
  margin: auto;
  overflow: hidden;
`

export const Triangle = styled.div`
  position: absolute;
  width: 140%;
  height: 142%;
  left: 300px;
  background: #dc555d;
  transform: rotate(115deg);
`
export const InformationWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #912c36;
  overflow: hidden;
  color: #fff;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 1fr);
`
export const Specifications = styled.div`
  font-size: 1.2rem;
  font-weight: 200;
  grid-column: 2/4;
  grid-row: 4/9;

  p {
    margin: 10px 0;
  }
`
export const Description = styled.div`
  grid-column: 2/4;
  grid-row: 7/8;
  width: 300px;
  p {
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: 200;
  }
`
export const ImageWrapper = styled.div`
  z-index: 2;
  grid-column: 8/12;
  grid-row: 2/5;
  img {
    width: 100%;
  }
`
export const Evolutions = styled.div`
  z-index: 2;
  display: flex;
  margin-top: 16px;
  align-items: center;
  justify-content: space-between;
  grid-column: 8/11;
  grid-row: 8/10;
`
export const Card = styled.div`
  border-radius: 15px;
  background: #912c36;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 0 15px;
  cursor: pointer;
  img {
    width: 100%;
  }
`

export const Name = styled.h2`
  grid-column: 4/5;
  grid-row: 2/3;
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: bold;
`
