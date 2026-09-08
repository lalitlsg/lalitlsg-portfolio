import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Lalit's name and role", () => {
  render(<App />);
  expect(screen.getAllByText(/Lalit Garghate/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/SDE III/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/^Resume$/i).length).toBeGreaterThan(0);
});
