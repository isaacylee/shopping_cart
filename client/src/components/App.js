import { useEffect, useState } from "react";
import AddProductForm from "./AddProductForm";
import ProductsListing from "./ProductListing";
import Cart from "./Cart";

import { getProducts, createProduct, updateProductInfo, deleteProduct } from "../services/products";
import { getCartItems, addToCart, cartCheckout } from "../services/cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const cart = await getCartItems();
      setCartItems(cart);
    }
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchCartItems();
    fetchProducts();
  }, []);

  const handleAddProduct = async (newProduct, callback) => {
    try {
      const createdProduct = await createProduct(newProduct);
      setProducts(products.concat(createdProduct));
      callback && callback();
    } catch(error) {
      console.log(error.message);
    }
  }

  const handleUpdateProduct = async (id, updatedInfo, callback) => {
    try {
      const updatedProduct = await updateProductInfo(id, updatedInfo);
      setProducts(products.map(product => {
        return product._id === id ? updatedProduct : product
      }));
      callback && callback();
    } catch(error) {
      console.log(error.message);
    }
  }

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter(product => {
        return product._id !== id;
      }));
    } catch(error) {
      console.log(error.message);
    }
  }

  const handleAddToCart = async (productId) => {
    const added = await addToCart(productId);
    if (added.item.quantity === 1) {
      setCartItems(cartItems.concat(added.item));
    } else {
      setCartItems(cartItems.map(item => {
        return item._id === added.item._id ? added.item : item;
      }));
    }

    setProducts(products.map(product => {
      return product._id === productId ? added.product : product;
    }))
  }

  const handleCheckout = async () => {
    try {
      await cartCheckout();
      setCartItems([]);
    } catch(error) {
      console.log(error.message);
    }
  }

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart cartItems={cartItems} onCheckout={handleCheckout} />
      </header>
      <main>
        <ProductsListing
          products={products}
          onAddToCart={handleAddToCart}
          onUpdateProduct={handleUpdateProduct}
          onDeleteProduct={handleDeleteProduct}
        />
        <AddProductForm onSubmit={handleAddProduct} />
      </main>
    </div>
  )
};

export default App;