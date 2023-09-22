import { useState } from "react";
import FormInput from "./FormInput";
import FormButtons from "./FormButtons";

const EditProductForm = ({ product, toggleEditForm, onUpdateProduct }) => {
  const { _id: productId, title, price, quantity } = product;
  const [newTitle, setNewTitle] = useState(title);
  const [newPrice, setNewPrice] = useState(price);
  const [newQuantity, setNewQuantity] = useState(quantity);

  const reset = () => {
    setNewTitle(title);
    setNewPrice(price);
    setNewQuantity(quantity);
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdateProduct(
      productId,
      {
        title: newTitle,
        price: parseFloat(newPrice),
        quantity: parseInt(newQuantity, 10)
      },
      toggleEditForm
    )
  }

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form action="" onSubmit={handleUpdate}>
        <FormInput
          type="text"
          id="product-name"
          value={newTitle}
          label="Product Name"
          onChange={setNewTitle}
          aria-label="Product Name"
          required
        />
        <FormInput
          type="number"
          id="product-price"
          value={newPrice}
          label="Price"
          onChange={setNewPrice}
          aria-label="Product Price"
          required />
        <FormInput
          type="number"
          id="product-quantity"
          value={newQuantity}
          label="Quantity"
          onChange={setNewQuantity}
          aria-label="Product Quantity"
          required />
        <FormButtons submitText="Update" onCancel={toggleEditForm} />
      </form>
    </div>
  );
}
 
export default EditProductForm;