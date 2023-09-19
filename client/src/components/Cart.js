import cartItems from "../mockData/cartData";

const CartItem = ({ title, quantity, price }) => {
  return (
    <tr>
       <td>{title}</td>
       <td>{quantity}</td>
       <td>${price}</td>
    </tr>
  )
}

const Cart = () => {
  return (
    <div class="cart">
        <h2>Your Cart</h2>
        <table class="cart-items">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(({ id, title, price, quantity }) => (
              <CartItem key={id} title={title} price={price} quantity={quantity} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="total">Total: $729.98</td>
            </tr>
          </tfoot>
        </table>
        <div class="checkout-button">
          <button class="checkout">Checkout</button>
        </div>
      </div>
  )
}
 
export default Cart;