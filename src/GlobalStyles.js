import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing:border-box;
        padding:0;
        margin:0;
        font-family: 'Roboto', sans-serif;
    }
 html::-webkit-scrollbar {
  width: 10px;
}
 
html::-webkit-scrollbar-thumb {
  background-color: #fc5862;
}
html {
  scrollbar-width: thin;
    scrollbar-color: #fc5862 #d8d8d8;
}

button{
  outline:none;
  border:none;
}
a{
  text-decoration:none;
}
`

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  @media screen and (max-width: 920px) {
  }
`

export default GlobalStyles
