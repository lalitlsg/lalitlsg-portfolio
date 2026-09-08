import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Lalit's name, blogs, and coding profiles", () => {
  render(<App />);
  expect(screen.getAllByText(/Lalit Garghate/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/SDE III/i).length).toBeGreaterThan(0);
  expect(screen.getByRole("heading", { name: /blogs/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /coding profiles/i })).toBeInTheDocument();
});
