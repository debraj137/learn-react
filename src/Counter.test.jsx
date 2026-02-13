import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

test("increments counter on click", async () => {
  render(<Counter />);

  const button = screen.getByText("+");
  await userEvent.click(button);

  expect(screen.getByText("Count: 1")).to.exist;
});
