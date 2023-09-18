import React from "react";
import ReactDOM from "react-dom/client";

const CartItem = ({ name, quantity, price }) => {
  return React.createElement("tr", {
    children: [
      React.createElement("td", null, name),
      React.createElement("td", null, quantity),
      React.createElement("td", null, price)
    ]
  })
}

const Cart = () => {
  return React.createElement("div", {
    className: "cart",
    children: [
      React.createElement("h2", null, "Your Cart"),
      React.createElement("table", {
        className: "cart-items",
        children: [
          React.createElement("thead", {
            children: [
              React.createElement("tr", {
                children: [
                  React.createElement("th", { scope: "col" }, "Item"),
                  React.createElement("th", { scope: "col" }, "Quantity"),
                  React.createElement("th", { scope: "col" }, "Price")
                ]
              })
            ]
          }),
          React.createElement("tbody", {
            children: [
              CartItem({
                name: "Amazon Kindle E-reader",
                quantity: 2,
                price: "$79.99"
              }),
              CartItem({
                name: "Apple 10.5-Inch iPad Pro",
                quantity: 1,
                price: "$649.99"
              })
            ]
          }),
          React.createElement("tfoot", {
            children: [
              React.createElement("tr", {
                children: [
                  React.createElement("td", {
                    colspan: 3,
                    className: "total"
                  }, "Total: $729.98")
                ]
              })
            ]
          })
        ]
      }),
      CheckoutButton()
    ]
  })
}

const CheckoutButton = () => {
  return React.createElement("button", {
    className: "checkout",
    disabled: true
  }, "Checkout")
}

const Header = () => {
  return React.createElement("header", {
    children: [
      React.createElement("h1", null, "The Shop!"),
      Cart()
    ]
  })
}

const Product = ({ name, price, quantity }) => {
  return React.createElement("li", {
    className: "product",
    children: [
      React.createElement("div", {
        className: "product-details",
        children: [
          React.createElement("h3", null, name),
          React.createElement("p", { className: "price" }, `$${price}`),
          React.createElement("p", { className: "quantity" }, `${quantity} left in stock`),
          React.createElement("div", {
            className: "actions product-actions",
            children: [
              React.createElement("button", { className: "add-to-cart" }, "Add to Cart"),
              React.createElement("button", { className: "edit" }, "Edit")
            ]
          }),
          React.createElement("button", {
            className: "delete-button",
            children: [React.createElement("span", null, "X")]
          })
        ]
      })
    ]
  })
}

const ProductsListing = () => {
  return React.createElement("div", {
    className: "product-listing",
    children: [
      React.createElement("h2", null, "Products"),
      React.createElement("ul", {
        className: "product-list",
        children: [
          Product({name: "Amazon Kindle E-reader", price: 79.99, quantity: 3}),
          Product({name: "Apple 10.5-Inch iPad Pro", price: 649.99, quantity: 2}),
          Product({name: "Yamaha Portable Keyboard", price: 155.99, quantity: 0})
        ]
      })
    ]
  })
}

const AddProductButton = () => {
  return React.createElement("p", {
    children: [
      React.createElement("button", {
        className: "add-product-button"
      }, "Add A Product")
    ]
  })
}

const FormInputGroup = ({name, labelText, inputProps}) => {
  return React.createElement("div", {
    className: "input-group",
    children: [
      React.createElement("label", {
        htmlFor: name
      }, labelText),
      React.createElement("input", inputProps)
    ]
  })
}

const FormButtons = () => {
  return React.createElement("div", {
    className: "actions form-actions",
    children: [
      React.createElement("button", { type: "submit" }, "Add"),
      React.createElement("button", { type: "button" }, "Cancel")
    ]
  })
}

const AddForm = () => {
  return React.createElement("div", {
    className: "add-form visible",
    children: [
      AddProductButton(),
      React.createElement("h3", null, "Add Product"),
      React.createElement("form", {
        children: [
          FormInputGroup({
            name: "product-name",
            labelText: "Product Name:",
            inputProps: {
              type: "text",
              id: "product-name",
              name: "product-name",
              required: true
            }
          }),
          FormInputGroup({
            name: "product-price",
            labelText: "Price:",
            inputProps: {
              type: "number",
              id: "product-price",
              name: "product-price",
              min: "0",
              step: "0.01",
              required: true
            }
          }),
          FormInputGroup({
            name: "product-quantity",
            labelText: "Quantity:",
            inputProps: {
              type: "number",
              id: "product-quantity",
              name: "product-quantity",
              min: "0",
              required: true
            }
          }),
          FormButtons()
        ]
      })
    ]
  })
}

const Main = () => {
  return React.createElement("main", {
    children: [
      ProductsListing(),
      AddForm()
    ]
  })
}

const App = () => {
  return React.createElement("div", {
    id: "app",
    children: [
      Header(),
      Main()
    ]
  });
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(App());