import React, { Component } from "react";

import Aux from "../../../hoc/Aux/Aux";

import Button from "../../UI/Button/Button";

/**
 *
 * @param {*} props
 */
class OrderSummary extends Component {
  componentDidUpdate() {
    console.log("Fired");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map((key) => {
      return (
        <li key={key}>
          <span style={{ textTransform: "capitalize" }}>{key}</span>:
          {this.props.ingredients[key]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious Burger with the following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout</p>
        <Button btnType="Danger" clicked={this.props.purchasedCanceled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
