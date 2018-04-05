import React, { Component } from "react";

class AddInventory extends Component {
    state = {item: ''}
    
    handleChange = event => {
        const name = event.target.name;
        const newState = { ...this.state.item };
        newState[name] = event.target.value;
        this.setState(newState);
      };

      handleSubmit = async event => {
        console.log('handled')  
        //1. Stop form from submitting
        event.preventDefault();
        const payload = {
          item: this.state.item
        };
        await this.props.addInventory(payload)
        await this.setState( {item: ''} )
    }
  render() {
    return (
      <div>
          <h2>Add To Inventory</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            name="item"
            type="text"
            placeholder="Item"
            onChange={this.handleChange}
            value={this.state.item}
            required
          />
          <button type="submit">
            Add Store Item
          </button>
        </form>
      </div>
    );
  }
}

export default AddInventory;
