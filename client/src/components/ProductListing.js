// eslint-disable-next-line no-unused-vars
import Product from "./Product"

const ProductsListing = ({ products, onAddToCart, onUpdateProduct }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map(({ _id, title, price, quantity }) =>
          <Product key={_id} productId={_id} title={title} price={price} quantity={quantity} onAddToCart={onAddToCart} onUpdateProduct={onUpdateProduct}/>
        )}
      </ul>
    </div>
  )
}

export default ProductsListing;