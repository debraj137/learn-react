import { render, screen, waitFor } from "@testing-library/react";
import FetchComponent from "./FetchComponent";

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ name: "Debraj" })
  })
);

test("renders fetched data", async () => {
  render(<FetchComponent />);

  await waitFor(() =>
    expect(screen.getByText("Debraj")).to.exist
  );
});
