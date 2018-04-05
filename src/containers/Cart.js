import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as CartActions from "../actions/CartActions";
import Shelf from "../components/Shelf";


class Cart extends Component {
  state = {};

  render() {
    return (
      <div>  
        <Shelf addItem={this.props.actions.addToCart} />
        <h2>Cart</h2>
        <ol>
          {this.props.cart.map((item, id) => {
              return(
            <li key={id}>
                {item}
                <button onClick={() => this.props.actions.removeFromCart(id)}>-</button>
                </li>
              )
          })}
        </ol>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CartActions, dispatch)
  };
}

// typically the lines below would be condensed into :
// export default connect(mapStateToProps, mapDispatchToProps)(Cart)

// returns a function wrapper that we need to pass the component into
const wrapperFunction = connect(mapStateToProps, mapDispatchToProps);
// wraps the Cart component with the store connection configured above
const wrappedComponent = wrapperFunction(Cart);

export default wrappedComponent;
