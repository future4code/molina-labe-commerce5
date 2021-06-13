import React from 'react'
import GlobalStyle from "./components/global"
import Header from "./components/header"
import Footer from "./components/footer"
import Filter from './components/filter'
import ItemProducts from './components/itemProduct'
import ItemBasket from './components/itemBasket'
import {list} from './components/list'
import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  height: 100vh;
  margin: 0 auto;
  
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 10vw;
  height: 70vh;
  padding: 1rem 1rem;
  border-radius:25px;
  p{
    margin: 5px 0px;
    padding:0;
  }
  h1{
    margin:0;
    margin-bottom: 15px;
    padding:0;
    text-align: center;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 70vw;
  padding: 1rem 1rem;
`
const Info = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 0 15px;
   border: 1px solid black;
   border-radius:30px;
   padding: 4px;
   height:30px;
   margin:5px;
   p{
       font-weight: bold;
   }
`;

const RightInfo = styled.div`
    button{
        margin-left: 10px;
    }
`;

const Products = styled.div`
  display: grid;
  align-items: center;
  justify-items:center;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
 
`;

const HideMenu = styled.div`
    width: 18vw;
    height: 70vh;   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid black;
    border-radius:25px;
    padding: 1rem 0.5rem;
    h1, h4{
      margin:0;
      margin-bottom: 15px;
      padding:0;
    }
`;

class App extends React.Component {
  state = {
    allList: list,
    myBasket: [],
    showBasket: false,
    filterText: "",
    filterMax: null,
    filterMin: null,
  };
  componentDidUpdate() {
    const objectMyBasket = {
      myBasket: this.state.myBasket,
    };
    localStorage.setItem("myBasket", JSON.stringify(objectMyBasket));
  }

  componentDidMount() {
    const myBasketString = localStorage.getItem("myBasket");
    const myBasketObject = JSON.parse(myBasketString);

    if (myBasketObject) {
      this.setState({
        myBasket: myBasketObject.myBasket,
      });
    }
  }

  //  ---------------Função de Mostrar Carrinho------------------- \\
  changeBasket = () => {
    this.setState({ showBasket: !this.state.showBasket });
  };
  //  ---------------Fim Função de Mostrar Carrinho------------------- \\

  //  ---------------Filtro Crescente e Decrescente------------------- \\
  changeSelect = (event) => {
    const noOrder = this.allList;
    let newValue = event.target.value;

    switch (newValue) {
      case "crescente":
        const ordemCrescente = this.state.allList.sort(
          (a, b) => a.price - b.price
        );
        this.setState({ allList: ordemCrescente });
        break;
      case "decrescente":
        const ordemDecrescente = this.state.allList.sort(
          (a, b) => b.price - a.price
        );
        this.setState({ allList: ordemDecrescente });
        break;
      default:
        this.setState({ allList: noOrder });
    }
  };
  //  ---------------Fim Crescente e Decrescente------------------- \\

  //  ---------------Carrinho de Compra ------------------- \\
  addBasket = (id) => {
    const productBaskets = this.state.myBasket;
    const productBasket = this.state.allList.filter((item) => {
      return id === item.id;
    });
    productBaskets.push(productBasket[0]);
    this.setState({ myBasket: productBaskets });
  };

  delBasket = (id) => {
    const newBasketList = this.state.myBasket.filter((item) => {
      return id !== item.id;
    });
    this.setState({ myBasket: newBasketList });
  };
  //  ---------------Fim Carrinho de Compra------------------- \\

  //  ---------------Filtros de Valor e Texto------------------- \\
  filterText = (value) => {
    this.setState({ filterText: value });
  };

  filterMax = (value) => {
    this.setState({ filterMax: value });
  };

  filterMin = (value) => {
    this.setState({ filterMin: value });
  };
  //  ---------------Fim Filtros de Valor e Texto------------------- \\

  render() {
    //  ---------------Contagem de Produtos ------------------- \\

    const amountOfProducts = this.state.allList.length;

    const basketList = this.state.myBasket.map((item) => {
      return (
        <ItemBasket key={item.id} product={item} delBasket={this.delBasket} />
      );
    });

    const priceArray = this.state.myBasket.map((item) => item.price);
    const totalBasket = priceArray.reduce(
      (acumulate, currentValue) => acumulate + currentValue,
      0
    );

    //  ---------------Fim Contagem de Produtos------------------- \\

    //  ---------------Lista de Produtos/Filtro------------------- \\

    const productList = this.state.allList

      .filter((item) => {
        return item.name.toLowerCase().indexOf(this.state.filterText) >= 0;
      })

      .filter((item) => {
        return item.price < (parseFloat(this.state.filterMax) || Infinity);
      })

      .filter((item) => {
        return item.price > (parseFloat(this.state.filterMin) || 0);
      })

      .map((item) => {
        return (
          <ItemProducts
            key={item.id}
            product={item}
            addBasket={this.addBasket}
            filterText={this.state.filterText}
            filterMax={this.state.filterMax}
            filterMin={this.state.filterMin}
          />
        );
      });

    //  --------------- Fim da Lista de Produtos/Filtro------------------- \\
    //  --------------- Tudo o que aparece na Tela------------------- \\

    return (
      <div>
        <GlobalStyle />
        <Header/>
        <Main>
          <FilterContainer>
            <Filter
              productText={this.state.filterText}
              filterText={this.filterText}
              filterMax={this.filterMax}
              filterMin={this.filterMin}
            />
          </FilterContainer>
          <Section>
            <Info>
              <p>Quantidade de Produtos: {amountOfProducts}</p>
              <RightInfo>
                <select onChange={this.changeSelect}>
                  <option value="crescente">Preço: Crescente</option>
                  <option value="decrescente">Preço: Decrescente</option>
                </select>
                <button onClick={this.changeBasket}>Carrinho</button>
              </RightInfo>
            </Info>
            <Products>{productList}</Products>
          </Section>
          {this.state.showBasket && (
            <HideMenu>
              <h1>Carrinho</h1>
              <h4>Total: R${totalBasket}</h4>
              {basketList}
            </HideMenu>
          )}
        </Main>
        <Footer />
      </div>
    );
  }
}
export default App
//  --------------- Fim de tudo o que Aparece na tela ------------------- \\