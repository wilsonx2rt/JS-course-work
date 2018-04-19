import React from 'react';
import './index.css';

class Filter extends React.Component {

  render() {
    return(
      <div className="filter-wrapper"
       
      onChange={(e) => {
        this.props.handleFilterChange(e);
      }}
      >
        <input 
          className="radio-input" 
          type="radio" 
          value="all"
          name="radio" 
          defaultChecked
        />
        All
        <input 
          className="radio-input" 
          type="radio" 
          value="pending" 
          name="radio"
        />
        Pending
        <input 
          className="radio-input" 
          type="radio" 
          value="completed" 
          name="radio"
        />
        Completed
      </div>
    )
  }
}

export default Filter;