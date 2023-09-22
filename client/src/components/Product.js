import { useState } from "react";
import EditProductForm from "./EditProductForm";

const Product = ({ product, onAddToCart, onUpdateProduct, onDeleteProduct }) => {
  const { _id: productId, title, price, quantity } = product;
  const [ displayEditForm, setDisplayEditForm ] = useState(false);

  const toggleEditForm = () => {
    setDisplayEditForm(!displayEditForm);
  }

  const handleAddToCart = (e) => {
    e.preventDefault();
    onAddToCart(productId);
  }

  const handleDeleteProduct = (e) => {
    e.preventDefault();
    onDeleteProduct(productId); 
  }
  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className={quantity === 0 ? "quantity none-left" : "quantity"}>{quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart" onClick={handleAddToCart} disabled={quantity < 1 ? true : false}>
            Add to Cart
          </button>
          {!displayEditForm && (
            <button className="edit" onClick={toggleEditForm}>Edit</button>
          )}
        </div>
        <button className="delete-button" onClick={handleDeleteProduct}><span>X</span></button>
      </div>
      {displayEditForm && (
        <EditProductForm 
          toggleEditForm={toggleEditForm}
          product={product}
          onUpdateProduct={onUpdateProduct}
        />
      )}
    </li>
  )
}

export default Product