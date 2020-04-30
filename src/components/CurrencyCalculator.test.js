import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CurrencyCalculator from "./CurrencyCalculator";

test("renders component", async () => {
  const { getByText } = render(<CurrencyCalculator />);
  expect(getByText("Please specify value")).toBeInTheDocument();
});

test("calculates result after user types value", async () => {
  const { getByLabelText, getByText, debug } = render(<CurrencyCalculator />);
  const input = getByLabelText("pln-input");

  fireEvent.change(input, { target: { value: "122" } });
  const textNode = await waitForElement(() => getByText("PLN 122.00 = €28.50"));

  expect(textNode).toBeInTheDocument();
});
