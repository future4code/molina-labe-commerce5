import React from "react"
import styled from "styled-components"

const Container = styled.div`
padding: 0;
margin: 0;
display: flex;
justify-content: center;
align-items: center;
background-color: darkgrey;
width: 100%;
height: 50px;
`;

const Title = styled.h1`
padding: 0;
margin: 0;
font-size: 1.7em;
display: flex;
text-align: center;
justify-items: center;
color: white;

`;

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Title>Lab e-commerce</Title>
      </Container>
    );
  }
}

export default Header;