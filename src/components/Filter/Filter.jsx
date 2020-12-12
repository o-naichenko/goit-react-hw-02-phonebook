import React, { Component } from "react";
import "./Filter.css";

class Filter extends Component {
    state = {
        filter: '',
    }
  onChangeHandler = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
    this.props.onChange(value);
  }
    render() { 
        const { filter } = this.state;
        return (
            <label className="Contacts__search-label">
            Find contacts by name
            <input
              className="Contacts__search-input"
              type="text"
              name="filter"
              value={filter}
              onChange={this.onChangeHandler}
            ></input>
          </label>
        )
    }
}
 
export default Filter;