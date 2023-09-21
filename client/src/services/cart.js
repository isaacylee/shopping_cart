import axios from "axios";
import {
  GET_CART,
  ADD_TO_CART,
  CHECKOUT
} from "../constants/routes"

export const getCartItems = async () => {
  const { data } = await axios.get(GET_CART);
  return data;
}

export const addToCart = async (productId) => {
  const { data } = await axios.post(ADD_TO_CART, { productId });
  return data;
}

export const cartCheckout = async () => {
  await axios.post(CHECKOUT);
}

