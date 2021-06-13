import React from 'react'
import styled from "styled-components"

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width:100%;
height: 50px;
position: relative;
margin: 0;
margin-top: 90px;
background-color: darkgrey;
`

const Title = styled.h2`
display: flex;
font-size: 1em;
text-align: center;
justify-content: center;
color: white;
`;

class Footer extends React.Component {
  render(){
    return(
      <Container>
        <Title>© Todos os direitos reservados</Title>
      </Container>
    )
  }
}

export default Footer