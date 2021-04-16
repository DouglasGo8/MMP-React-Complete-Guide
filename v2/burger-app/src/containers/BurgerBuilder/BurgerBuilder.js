import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import axios from "../../AxiosBurger";
import Aux from "../../hoc/Aux/Aux";
import Modal from "../../components/UI/Modal/Modal";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Spinner from "../../components/UI/Spinner/Spinner";

import exceptionHandler from "../../hoc/Exceptions/ExceptionHandler";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

/**
 * @summary Graphic Representation's Burger
 */
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  async updatePurchaseState(currentIngredients) {
    const sum = Object.keys(currentIngredients)
      .map((k) => {
        return currentIngredients[k];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchaseable: sum > 0 });
  }

  /**
   * State must be always in a immutable way
   * @param {*} type
   */
  addIngredientHandler = async (type) => {
    //
    const currentCount = this.state.ingredients[type];
    const updatedCount = currentCount + 1;
    //
    const currentIngredients = { ...this.state.ingredients };
    currentIngredients[type] = updatedCount;
    //
    const priceAddition = INGREDIENT_PRICES[type];
    const currentPrice = this.state.totalPrice;
    const updatedPrice = currentPrice + priceAddition;
    //
    this.setState({
      totalPrice: updatedPrice,
      ingredients: currentIngredients,
    });

    this.updatePurchaseState(currentIngredients);
  };

  removeIngredientHandler = async (type) => {
    //
    const currentCount = this.state.ingredients[type];
    if (currentCount <= 0) return;
    const updatedCount = currentCount - 1;
    //
    const currentIngredients = { ...this.state.ingredients };
    currentIngredients[type] = updatedCount;
    //
    const priceDeduction = INGREDIENT_PRICES[type];
    const currentPrice = this.state.totalPrice;
    const updatedPrice = currentPrice - priceDeduction;
    //
    this.setState({
      totalPrice: updatedPrice,
      ingredients: currentIngredients,
    });

    this.updatePurchaseState(currentIngredients);
  };

  purchaseHandler = async () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = async () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = async () => {
    this.setState({ loading: true });

    const order = {
      orderId: uuidv4(),
      orderDate: new Date(),
      price: this.state.totalPrice,
      ingredients: this.state.ingredients,
      customer: {
        name: "Max Steel",
        address: {
          street: "Street of no Name",
          zipCode: "6631",
          country: "Brazil",
        },
        email: "max@mail.com",
      },
      deliveryMethod: "fastest",
    };

    console.log(order);

    /*axios.post("/add/burger/order", order, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        withCredentials: false,
      })
      .then((response) => {
        this.setState({
          loading: false,
          purchasing: false,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          purchasing: false,
        });
      });*/

    this.setState({
      loading: false,
      purchasing: false,
    });
  };

  async componentDidMount() {
    axios({
      method: "GET",
      url: "/ingredients",
    })
      .then((result) => {
        const json = result.data[0];
        delete json["_id"];
        this.setState({
          ingredients: json,
        });
      })
      .catch((err) => {
        this.setState({ error: true });
      });
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    if (this.state.ingredients) {
      orderSummary = (
        <OrderSummary
          price={this.state.totalPrice}
          purchasedCanceled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          ingredients={this.state.ingredients}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    let burger = this.state.error ? (
      <p>Ingredients can't be loaded</p>
    ) : (
      <Spinner />
    );

    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            disabled={disabledInfo}
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            price={this.state.totalPrice}
            ordered={this.purchaseHandler}
            purchaseable={this.state.purchaseable}
          />
        </Aux>
      );
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default exceptionHandler(BurgerBuilder, axios);
