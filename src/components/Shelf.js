import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AddInventory from "../components/AddInventory"

import * as ShelfActions from "../actions/ShelfActions";
class Shelf extends Component {
 

  render() {
    return (
      <div>
        <AddInventory addInventory={this.props.actions.addToInventory}/>  
        <h2>Store Inventory</h2>
        <ul>
          {this.props.shelf.map((item, id) => {
              return(
            <li key={id}>
              {item}
              <button onClick={() => this.props.addItem(item)}>+</button>
            </li>
              )
          })}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state, props) {
    return {
      shelf: state.shelf
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(ShelfActions, dispatch)
    };
  }
  
  // typically the lines below would be condensed into :
  // export default connect(mapStateToProps, mapDispatchToProps)(Cart)
  
  // returns a function wrapper that we need to pass the component into
  const wrapperFunction = connect(mapStateToProps, mapDispatchToProps);
  // wraps the Cart component with the store connection configured above
  const wrappedComponent = wrapperFunction(Shelf);

  export default wrappedComponent;