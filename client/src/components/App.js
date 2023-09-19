import products from "../mockData/data";
import cartItems from "../mockData/cartData";
import ProductsListing from "./ProductListing";
import Cart from "./Cart";
import AddForm from "./AddForm"
import EditForm from "./EditForm"

const Header = ({cartItems}) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <Cart items={cartItems} />
    </header>  
  )
}

const Main = ({ products }) => {
  return (
    <main>
      <ProductsListing products={products} />
      <AddForm />
      <EditForm />
    </main>
  )
}

const App = () => {
  return (
    <div id="app">
      <Header cartItems={cartItems}/>
      <Main products={products}/>
    </div>
  )
};

export default App;