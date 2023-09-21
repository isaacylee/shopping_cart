// import productsData from "../mockData/data";
// import cartItems from "../mockData/cartData";
import { useEffect, useState } from "react";
import axios from "axios";

import ProductsListing from "./ProductListing";
import Cart from "./Cart";
import AddProductForm from "./AddProductForm"


const Header = ({ cartItems, handleAddToCart }) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <Cart cartItems={cartItems} />
    </header>  
  )
}

const Main = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    }
    fetchProducts(); 
  }, [])

  const handleAddProduct = async (newProduct, callback) => {
    try {
      const { data } = await axios.post("/api/products", {...newProduct });
      setProducts(products.concat(data));
      if (callback) {
        callback();
      }
    } catch(error) {
      console.log(error);
    }
  }

  const handleUpdateProduct = async (id, newProduct, callback) => {
    try {
      const { data } = await axios.put(`/api/products/${id}`, newProduct);
      setProducts(products.map(product => {
        return product._id == id ? data : product
      }));
      console.log(callback);
      if (callback) {
        callback();
      }
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <main>
      <ProductsListing products={products} onAddToCart={onAddToCart} onUpdateProduct={handleUpdateProduct} />
      <AddProductForm onSubmit={handleAddProduct}/>
    </main>
  )
}

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const { data } = await axios.get("/api/cart");
      setCartItems(data);
    }
    fetchCartItems();
  }, [])

  const handleAddToCart = async (productId) => {
    console.log(productId)
    const { data } = await axios.post("/api/add-to-cart", { productId });
    setCartItems(data);
  }

  return (
    <div id="app">
      <Header cartItems={cartItems} />
      <Main onAddToCart={handleAddToCart} />
    </div>
  )
};

export default App;