import React, { Component } from 'react';
import Filter from './components/Filter';
import ProductDisplay from './components/ProductDisplay';
import Products from './components/products';
export class App extends Component {
  state = {
    cart: [],
    ItemSize: [],
    // filter: null,
  };
  countIncrese = (id, mode) => {
    //mode contains 'add' and 'remove' from this.props.func.includes(data.id)
    console.log(id);

    this.setState({
      cart:
        mode === 'add'
          ? [...this.state.cart, id]
          : this.state.cart.filter((p) => p !== id),
    });
  };
  // onFilterchange = (filter) => {
  //   this.setState({ filter });
  // };
  filterRes = (size) => {
    this.setState({
      ItemSize: [...this.state.ItemSize, size],
    });
  };

  filterRem = (size) => { 
    this.setState({
      ItemSize: this.state.ItemSize.filter((itemsize) => itemsize !== size),
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <ProductDisplay
          products={Products}
          func={this.state.cart}
          countIncrese={this.countIncrese}
          filter={this.state.ItemSize}
        />
        <Filter
         filterRes={this.filterRes} filterRem={this.filterRem}
        />
      </div>
    );
  }
}

export default App;
