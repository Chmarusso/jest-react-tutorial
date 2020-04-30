import React from "react";
import { act, render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CurrencyCalculator from "./CurrencyCalculator";

test("renders component", async () => {
  let component;
  act(() => {
    component = render(<CurrencyCalculator />);
  })
  expect(component.getByText("Please specify value")).toBeInTheDocument();
});

test("calculates result after user types value", async () => {
  const { getByLabelText, getByText, debug } = render(<CurrencyCalculator />);
  const input = getByLabelText("pln-input");
  act(() => {
    fireEvent.change(input, { target: { value: "122" } });
  });
  const textNode = await waitForElement(() => getByText("PLN 122.00 = €26.86"));

  expect(textNode).toBeInTheDocument();
});
