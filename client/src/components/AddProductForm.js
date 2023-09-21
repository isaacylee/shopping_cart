import { useEffect, useState } from "react";

const AddProductForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [displayAddProductForm, setDisplayAddProductFormm] = useState(false)

  const toggleAddProductForm = (e) => {
    e.preventDefault();
    setDisplayAddProductFormm(!displayAddProductForm)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, price, quantity }, reset);
  }

  const reset = () => {
    setTitle("");
    setPrice("");
    setQuantity("");
  }

  return (
    <div className={displayAddProductForm ? "add-form visible" : "add-form"}>
       <p><button className="add-product-button" onClick={toggleAddProductForm}>Add A Product</button></p>
      <h3>Add Product</h3>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            name="product-price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            min="0"
            step="0.01"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name="product-quantity"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
            min="0"
            required
          />
        </div>
        <div className="actions form-actions">
          <button type="submit">Add</button>
          <button type="button" onClick={toggleAddProductForm}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm;

