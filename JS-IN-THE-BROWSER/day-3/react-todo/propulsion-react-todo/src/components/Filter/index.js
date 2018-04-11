import React from 'react';
import './index.css';

class Filter extends React.Component {
  render() {
    return(
      <div className="filter-wrapper">
        <form className="radio-form">
          <div className="radio">
            <label>
              <input className="radio-input" type="radio" value="all" checked={true} />
            All
            </label>
          </div>
          <div className="radio">
            <label>
              <input className="radio-input" type="radio" value="pending" />
            Pending
            </label>
          </div>
          <div className="radio">
            <label>
              <input className="radio-input" type="radio" value="completed" />
            Completed
            </label>
          </div>
      </form>
      </div>
    )
  }
}

export default Filter;