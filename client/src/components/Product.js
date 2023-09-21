import { useEffect, useState } from "react";
import EditForm from "./EditForm"

const Product = ({ productId, title, price, quantity, onAddToCart, onUpdateProduct }) => {
  const [ displayEditForm, setDisplayEditForm ] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault()
    onAddToCart(productId);
  }

  const toggleEditForm = (e) => {
    if (e) { e.preventDefault(); }
    setDisplayEditForm(!displayEditForm);
  }

  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
          <button className="edit" onClick={toggleEditForm}>Edit</button>
        </div>
        <button className="delete-button"><span>X</span></button>
      </div>
      <EditForm display={displayEditForm} toggle={toggleEditForm} productId={productId} title={title} price={price} quantity={quantity} onUpdateProduct={onUpdateProduct} />
    </li>
  )
}

export default Product