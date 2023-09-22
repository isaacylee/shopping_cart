import { useState } from "react";
import FormInput from "./FormInput";
import FormButtons from "./FormButtons";

const AddProductForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [displayAddProductForm, setDisplayAddProductForm] = useState(false)

  const toggleAddProductForm = () => {
    setDisplayAddProductForm(!displayAddProductForm)
  }

  const handleSubmit = (e) => {
    console.log("submitted!")
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
        <FormInput
          type="text"
          id="product-name"
          label="Product Name:"
          value={title}
          onChange={setTitle} required
        />
        <FormInput
          type="number"
          id="product-price"
          label="Price:"
          value={price}
          onChange={setPrice}
          min="0"
          step="0.01"
          required
        />
        <FormInput
          type="number"
          id="product-quantity"
          label="Quantity:"
          value={quantity}
          onChange={setQuantity}
          min="0"
          required
        />
        <FormButtons submitText="Add" onCancel={toggleAddProductForm}/>
      </form>
    </div>
  )
}

export default AddProductForm;

