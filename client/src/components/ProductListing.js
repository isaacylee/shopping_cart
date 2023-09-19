// eslint-disable-next-line no-unused-vars
import Product from "./Product"

const ProductsListing = ({ products }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map(({ id, title, price, quantity }) =>
          <Product key={id} title={title} price={price} quantity={quantity} />
        )}
      </ul>
    </div>
  )
}

export default ProductsListing;