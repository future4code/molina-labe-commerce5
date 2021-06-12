import React from 'react'
import styled from "styled-components"

const Container = styled.div`
display: flex;
justify-content: center;
width:100%;
height: 100px;
position: relative;
margin: 0;
`

const Title = styled.h2`
display: flex;
font-size: 1.5em;
text-align: center;
justify-content: center;
color: green;
`;

class Footer extends React.Component {
  render(){
    return(
      <Container>
        <Title> Eu sou o footer </Title>
      </Container>
    )
  }
}

export default Footer