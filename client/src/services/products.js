import axios from "axios";

import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  updateProductRoute,
  deleteProductRoute
} from "../constants/routes"

export const getProducts = async () => {
  const { data } = await axios.get(GET_PRODUCTS);
  return data;
}

export const createProduct = async (newProduct) => {
  const { data } = await axios.post(CREATE_PRODUCT, { ...newProduct });
  return data;
}

export const updateProduct = async (id, updatedProduct) => {
  const { data } = await axios.put(updateProductRoute(id), updatedProduct);
  return data;
}

export const deleteProduct = async (id) => {
  await axios.delete(deleteProductRoute(id));
}