import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  background: ${({ background }) => background};
  padding: 3rem 5rem;
  color: #fff;
  @media screen and (max-width: 940px) {
    flex-direction: column-reverse;
    padding: 2rem 3rem;
  }
`

export const InformationWrapper = styled.div`
  flex: 1;
  padding-left: 3rem;
  @media screen and (max-width: 1200px) {
    padding: 0;
  }
`
export const Name = styled.h2`
  font-size: 4.5rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 1200px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 940px) {
    text-align: center;
  }
`
export const Biography = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  @media screen and (max-width: 940px) {
    justify-items: center;
  }
`
export const Statistics = styled.div`
  font-size: 1.7rem;
  font-weight: 200;
  p {
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 1200px) {
    font-size: 1.4rem;
  }
`
export const Description = styled.div`
  max-width: 500px;
  h4 {
    font-size: 2.3rem;
    margin: 2rem 0 1rem 0;
  }
  p {
    font-weight: 200;
    font-size: 1.7rem;
  }
  @media screen and (max-width: 1200px) {
    h4 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 500px) {
  }
`

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 600px;
  }
  @media screen and (max-width: 1200px) {
    img {
      width: 400px;
    }
  }
`

export const Evolutions = styled.div`
  display: flex;
`
export const Card = styled.div`
  margin: 0 2rem;
  img {
    width: 200px;
  }
  p {
    text-align: center;
    font-size: 1.1rem;
  }
  @media screen and (max-width: 1200px) {
    img {
      width: 125px;
    }
  }
`
