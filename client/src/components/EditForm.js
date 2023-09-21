import { useState } from "react";

const EditForm = ({ product, toggle, onUpdateProduct }) => {
  const { _id: productId, title, price, quantity } = product;
  const [newTitle, setNewTitle] = useState(title);
  const [newPrice, setNewPrice] = useState(price);
  const [newQuantity, setNewQuantity] = useState(quantity);

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdateProduct(
      productId,
      {
        title: newTitle,
        price: parseFloat(newPrice),
        quantity: parseInt(newQuantity, 10)
      },
      toggle
    )
  }

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form action="" onSubmit={handleUpdate}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value)
            }}
            aria-label="Product Name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={newPrice}
            onChange={(e) => {
              setNewPrice(e.target.value)
            }}
            aria-label="Product Price"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={newQuantity}
            onChange={(e) => {
              setNewQuantity(e.target.value)
            }}
            aria-label="Product Quantity"
          />
        </div>

        <div className="actions form-actions">
          <button type="submit">Update</button>
          <button type="button" onClick={toggle}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
 
export default EditForm;