import React from "react"
import styled from "styled-components"

const Container = styled.div`
padding: 0;
margin: 0;
display: flex;
justify-content: center;
align-items: center;
background-color: darkgrey;
position: fixed;
width: 100%;
height: 50px;
`;

const Title = styled.h1`
padding: 0;
margin: 0;
font-size: 1.5em;
display: flex;
text-align: center;
justify-items: center;
color: blue;

`;

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Title>Eu sou o Header </Title>
      </Container>
    );
  }
}

export default Header;