import styled from 'styled-components'
import Logo from '../../assets/characters_art_mas_dsk_01.jpg'

export const Container = styled.div`
  .moldavatar {
    margin-top: 4px;
    margin-left: 15px;
  }

  .moldHeader {
    background-image: url(${Logo});
    height: 150px;
    background-size: cover;
    text-align: center;
    color: #fff;
  }

  .imgMold {
    margin-top: 1px;
  }

  .moldTextTitle {
    margin-left: 15px;
    margin-top: 8px;
  }

  .moldHjs {
    float: left;
  }

  .moldLogin {
    float: right;
  }
`
