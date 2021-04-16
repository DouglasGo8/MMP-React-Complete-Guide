import React, { Component } from "react";

import Children from "../../adhoc/Children";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import ErrorHandlerPrettier from '../../adhoc/ErrorHandlerPrettie.js';

import uuid from "uuidv4";
import axios from "../../axios-orders";
import '@babel/polyfill';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 0.3,
  bacon: 0.7
};

/**
 * @author dbatista
 */
class BurgerBuilder extends Component {
  state = {
    ingredients: {},
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false
  };

  /**
   * 
   */
  async componentDidMount() {
    
    axios({
      method: 'GET',
      url: '/ingredients',
    }).then(result => {
      const json = result.data[0];
      delete json["_id"];
      this.setState({
        ingredients: json,
      })
    })
    .catch(console.warn);
  }

  /**
   *
   */
  doingPurchase = async () => {
    this.setState({ purchasing: true });
  };

  /**
   *
   */
  cancelPurchase = async () => {
    this.setState({ purchasing: false });
  };

  continuerPurchase = async () => {
    // alert('You continue!');
    
    this.setState({ loading: true });
    const order = {
      orderId: uuid(),
      orderDate: new Date(),
      price: this.state.totalPrice,
      ingredients: this.state.ingredients,
      customer: {
        name: "Max Steel",
        address: {
          street: "Street of no Name",
          zipCode: "6631",
          country: "Brazil"
        },
        email: "max@mail.com"
      },
      deliveryMethod: "fastest"
    };
    // console.log(order);
    axios.post("/add/burger/order", order, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
        withCredentials: false
      }).then(response => {
        this.setState({
          loading: false,
          purchasing: false,
        });
      }).catch(err => {
        this.setState({
          loading: false,
          purchasing: false,
        });
      });
  };

  /**
   *
   */
  updatePurchase = async ingredients => {
    const sum = Object.keys(ingredients)
      .map(key => ingredients[key])
      .reduce((total, el) => {
        return total + el;
      }, 0);

    //console.log(sum);
    this.setState({ purchasable: sum > 0 });
  };

  /**
   *
   */
  addOrRemove = async (type, operation) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = operation === "add" ? oldCount + 1 : oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updateCount;
    const priceCalculated = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice =
      operation === "add"
        ? oldPrice + priceCalculated
        : oldPrice - priceCalculated;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchase(updatedIngredients);
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = (
      <OrderSummary
        price={this.state.totalPrice}
        ingredients={this.state.ingredients}
        purchaseCanceled={this.cancelPurshase}
        purchaseContinue={this.continuerPurchase}
      />
    );
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Children>
        <Modal show={this.state.purchasing} modalClosed={this.cancelPurshase}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addOrRemove}
          ingredientRemoved={this.addOrRemove}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice}
          ordered={this.doingPurchase}
        />
      </Children>
    );
  }
}

export default ErrorHandlerPrettier(BurgerBuilder, axios);
