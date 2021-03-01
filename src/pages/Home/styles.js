import styled from 'styled-components'

export const Home = styled.div`
  h1{
    background: red;
  }
  height: 150px;
  background-image: linear-gradient(173deg, #ed4b76, #bc3c67);
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    height: 57px;
    width: 75%;
    background-position: center;
    background-repeat:no-repeat;
  }

  button{
    width: 50px;
    height: 50px;
    border: none;
    background: transparent;
    background-position: center;
    background-repeat: no-repeat;
    :hover{
      opacity: 0.7;
    }
  }
`
