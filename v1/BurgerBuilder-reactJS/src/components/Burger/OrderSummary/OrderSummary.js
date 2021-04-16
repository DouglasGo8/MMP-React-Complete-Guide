import React, { Component } from "react";

import Children from "../../../adhoc/Children";
import Button from "../../UI/Button/Button";
/**
 * @author dbatista
 * @param {*} props
 */
class OrderSummary extends Component {


  async componentDidUpdate() {
    console.log('[OrderSummary] componentDidUpdate');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(key => (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>{key}</span>:
        {this.props.ingredients[key]}
      </li>
    ));
    return (
      <Children>
        <h3>Your Order:</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Children>
    );
  }
}

export default OrderSummary;
