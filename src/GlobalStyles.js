import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing:border-box;
        padding:0;
        margin:0;
        font-family: 'Roboto', sans-serif;
    }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  @media screen and (max-width: 920px) {
  }
`

export default GlobalStyles
