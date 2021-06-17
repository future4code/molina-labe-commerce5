import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`



class Filter extends React.Component {
  filterText = (event) => {
    this.props.filterText(event.target.value);
  };

  filterMax = (event) => {
    this.props.filterMax(event.target.value);
  };

  filterMin = (event) => {
    this.props.filterMin(event.target.value);
  };

  render() {
    return (
      <Form>
        <h1>Filtro</h1>
        
          <p>Valor Mínimo:</p>
          <input type="number" onChange={this.filterMin} />
        
          <p>Valor Máximo:</p>
          <input type="number" onChange={this.filterMax} />
        
          <p>Buscar Produto:</p>
          <input type="text" onChange={this.filterText} />
        
      </Form>
    );
  }
}
export default Filter