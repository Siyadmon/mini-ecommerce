import React, { Component } from 'react';
import '../components/styles.css';
export class ProductDisplay extends Component {
  onBtnClick = (id, mode) => {
    this.props.countIncrese(id, mode);
  };
  render() {
    let product = this.props.products;
    if (this.props.size) {
      product = product.filter(
        (eachProduct) => this.props.size === eachProduct.size
      );
    }
    const mappedProducts = product.map((data, index) => {
      return (
        <div key={index} className="m-1 display">
          <div className="container mt-4 p-3">
            <img
              src={data.img}
              style={{ width: '250px', height: '300px' }}
              className="border"
            />
            <h4 className="pt-3">{data.pname}</h4>
            <h5 style={{ fontFamily: 'Trirong' }}>{data.price}</h5>
            <div>
              <button
                onClick={() =>
                  this.onBtnClick(
                    data.id,
                    this.props.func.includes(data.id) ? 'remove' : 'add'
                  )
                }
                className={
                  this.props.func.includes(data.id)
                    ? 'btn btn-danger'
                    : 'btn btn-primary'
                }
              >
                {this.props.func.includes(data.id)
                  ? 'Remove from Cart'
                  : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h4 className="counter">Cart-Items : {this.props.func.length}</h4>
        <div className="outer mt-3">{mappedProducts}</div>
      </div>
    );
  }
}

export default ProductDisplay;
