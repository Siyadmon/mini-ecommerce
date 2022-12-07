import React, { Component } from 'react';

import '../components/styles.css';

export class Filter extends Component {
  render() {
    const filterResult = (size) => {
      this.props.filterRes(size);
    };

    const filterRemove = (size) => {
      this.props.filterRem(size);
    };

    const Filter = ['XS', 'XL', 'XXL'];
    return (
      <div className=" filter">
        {/* to display filters XS,XL,XXL */}
        <h5>Filter</h5>
        {Filter.map((eachFilter, index) => (
          <div className="form-check " key={index}>
            <input
              className="form-check-input"
              type="checkbox"
              onClick={(e) =>
                e.target.checked === true
                  ? filterResult(eachFilter)
                  : filterRemove(eachFilter)
              }
            />
            <label className="form-check-label">{eachFilter}</label>
          </div>
        ))}
        {/* <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            onClick={(e) =>
              e.target.checked === true
                ? filterResult('XL')
                : filterRemove('XL')
            }
          />
          <label className="form-check-label">XL</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            onClick={(e) =>
              e.target.checked === true
                ? filterResult('XXL')
                : filterRemove('XXL')
            }
          />
          <label className="form-check-label">XXL</label>
        </div> */}
      </div>
    );
  }
}

export default Filter;
