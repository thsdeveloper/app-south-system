import styled from 'styled-components'
import Logo from '../../assets/logo-nav.png'
import IcoSearch from '../../assets/ic-search.svg'

export const Header = styled.div`
  height: 150px;
  background-image: linear-gradient(173deg, #ed4b76, #bc3c67);
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    height: 57px;
    width: 75%;
    background-image: url(${Logo});
    background-position: center;
    background-repeat:no-repeat;
  }

  button{
    width: 50px;
    height: 50px;
    border: none;
    background: transparent;
    background-image: url(${IcoSearch});
    background-position: center;
    background-repeat: no-repeat;
    :hover{
      opacity: 0.7;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  background: #ebe9d7;
  justify-content: center;

  span {
    width: 546px;
    height: 39px;
    margin: 359px 239px 0 239px;
    font-family: Roboto;
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: -0.45px;
    text-align: center;
    color: var(--charcoal-grey);
  }
`
export const Result = styled.div`
  width: 923px;
  height: 213.9px;
  margin: 44px 51px 0 50px;
  padding: 27px 253.8px 26.9px 30.6px;
  border-radius: 4.7px;
  background: #fff;
`
