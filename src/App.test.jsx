import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("loads todos", async () => {
    render(<App />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(await screen.findByText("delectus aut autem")).toBeInTheDocument();
  });
});
