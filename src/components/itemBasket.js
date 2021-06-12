import React from "react";
import styled from "styled-components";

const Basket = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin: 5px;
    padding: 0;
  }
  p:first-child {
    font-weight: bold;
  }
`;

const Button = styled.button`
  border-radius: 50%;
  outline: none;
  border: none;
  padding: 5px 9px;
  margin-left: 5px;
  transition: 0.3s;
  &:hover {
    background: black;
    color: white;
  }
`;

 class ItemBasket extends React.Component {
  render() {
    const { id, name, price } = this.props.product;
    const { delBasket } = this.props;

    return (
      <Basket>
        <Item onClick={() => delBasket(id)}>
          <p>{name}</p>
          <p>R${price}</p>
          <Button>x</Button>
        </Item>
      </Basket>
    );
  }
}
export default ItemBasket