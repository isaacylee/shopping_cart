import Product from "./Product"

const ProductsListing = ({ products, onAddToCart, onUpdateProduct, onDeleteProduct }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map(product =>
          <Product
            key={product._id}
            product={product}
            onAddToCart={onAddToCart}
            onUpdateProduct={onUpdateProduct}
            onDeleteProduct={onDeleteProduct}
          />
        )}
      </ul>
    </div>
  )
}

export default ProductsListing;