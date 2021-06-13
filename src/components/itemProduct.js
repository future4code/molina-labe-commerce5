import React from "react";
import styled from "styled-components";

const ItemProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 275px;
  border: 1px solid white;
  border-radius: 25px;
  
  img {
    height: 150px;
    width: 150px;
  }
  p {
    margin: 0;
    padding: 0;
  }
  button {
    box-shadow: 0px 0px 0px 2px #9fb4f2;
    background: linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);
    background-color: #7892c2;
    border-radius: 10px;
    border-color: white
    border: 1px solid #4e6096;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 19px;
    padding: 10px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #283966;
  }
  & button:hover {
    background: linear-gradient(to bottom, #476e9e 5%, #7892c2 100%);
    background-color: #476e9e;
  }
  .button:active {
    position: relative;
    top: 1px;
  }
`;

class Products extends React.Component {
  render() {
    const { id, image, name, price } = this.props.product;
    const { addBasket } = this.props;

    return (
      <ItemProduct>
        <img src={image} alt="product" />
        <p> {name} </p>
        <p>R$ {price} </p>
        <button onClick={() => addBasket(id)}>comprar</button>
      </ItemProduct>
    );
  }
}
export default Products
