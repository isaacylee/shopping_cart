import { useState } from "react";
import EditForm from "./EditForm"

const Product = ({ product, onAddToCart, onUpdateProduct, onDeleteProduct }) => {
  const { _id: productId, title, price, quantity } = product;
  const [ displayEditForm, setDisplayEditForm ] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    onAddToCart(productId);
  }

  const toggleEditForm = (e) => {
    if (e) { e.preventDefault(); }
    setDisplayEditForm(!displayEditForm);
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
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart" onClick={handleAddToCart} disabled={quantity < 1 ? true : false}>Add to Cart</button>
          <button className="edit" onClick={toggleEditForm}>Edit</button>
        </div>
        <button className="delete-button" onClick={handleDeleteProduct}><span>X</span></button>
      </div>
      {displayEditForm ? (
        <EditForm 
          toggle={toggleEditForm}
          product={product}
          onUpdateProduct={onUpdateProduct}
        />
      ): null}
    </li>
  )
}

export default Product