/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddProductForm from "./AddProductForm";

test("contains h3 heading", () => {
  render(<AddProductForm />);
  const heading = screen.getByRole("heading", {
    name: "Add Product",
    level: 3,
  });
  expect(heading).toBeInTheDocument();
})

test("product name changes when something is typed", async () => {
  render(<AddProductForm />);
  const user = userEvent.setup();
  const inputName = screen.getByRole("textbox", { name: "Product Name:"});
  await user.type(inputName, "iPhone 15 Pro");
  expect(inputName).toHaveValue("iPhone 15 Pro");
})

test("product price changes when something is typed", async () => {
  render(<AddProductForm />);
  const user = userEvent.setup();
  const inputPrice = screen.getByRole("spinbutton", { name: "Price:"});
  await user.type(inputPrice, "1");
  expect(inputPrice).toHaveValue(1);
})

test("product quantity changes when something is typed", async () => {
  render(<AddProductForm />);
  const user = userEvent.setup();
  const inputQuantity = screen.getByRole("spinbutton", { name: "Quantity:"});
  await user.type(inputQuantity, "1");
  expect(inputQuantity).toHaveValue(1);
})

test("onSubmit was invoked with the newProduct", async () => {
  const mockFunction = jest.fn();
  render(<AddProductForm onSubmit={mockFunction} />);
  const user = userEvent.setup();
  const inputName = screen.getByRole("textbox", { name: "Product Name:"});
  const inputPrice = screen.getByRole("spinbutton", { name: "Price:"});
  const inputQuantity = screen.getByRole("spinbutton", { name: "Quantity:"});
  await user.type(inputName, "iPhone 15 Pro");
  await user.type(inputPrice, "999.99");
  await user.type(inputQuantity, "1");
  const button = screen.getByRole("button", { name: "Add" });
  await user.click(button);
  expect(mockFunction.mock.calls[0][0]).toEqual({
    title: inputName.value,
    price: inputPrice.value,
    quantity: inputQuantity.value,
  });
});