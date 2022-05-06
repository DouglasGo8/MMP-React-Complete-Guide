import { uiActions } from "./ui-slice";

import { cartActions } from "./cart-slice";

const URL = "{{FIRE_BASE_URL}}";

/**
 * Redux Thunk Concept
 * @returns
 */
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error("Could not fetch Cart Data");
      }
      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data Failed! " + error,
        })
      );
    }
  };
};

/**
 * Redux Thunk concept
 * @param {*} cartData
 * @returns
 */
export const sendCartData = (cartData) => {
  /**
   *
   */
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    /**
     * Async Fetch Firebase invokation
     */
    const sendRequest = async () => {
      const response = await fetch(URL, {
        method: "PUT",
        body: JSON.stringify({
          items: cartData.items,
          totalQuantity: cartData.totalQuantity,
        }),
      });

      if (!response.ok) {
        throw new Error("Sendind cart data failed...");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully...",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: err,
        })
      );
    }
  }; // returns action object
};
