const CartItem = ({ title, quantity, price }) => {
  return (
    <tr>
       <td>{title}</td>
       <td>{quantity}</td>
       <td>${price}</td>
    </tr>
  )
}

const Cart = ({ cartItems, onCheckout }) => {
  const cartTotal = (cartItems) => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity
    })
    return total.toFixed(2);
  }
  
  return (
    <div className="cart">
        <h2>Your Cart</h2>
        <table className="cart-items">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(({ _id, title, price, quantity }) => (
              <CartItem key={_id} title={title} price={price} quantity={quantity} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" className="total">Total: ${cartTotal(cartItems)}</td>
            </tr>
          </tfoot>
        </table>
        <div className="checkout-button">
          <button className="checkout" onClick={onCheckout}>Checkout</button>
        </div>
      </div>
  )
}
 
export default Cart;