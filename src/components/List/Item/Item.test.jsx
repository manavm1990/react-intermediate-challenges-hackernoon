import { render, screen } from "@testing-library/react";
import Item from "./Item";

describe("Item", () => {
  it("renders the item with the proper text", () => {
    render(<Item txt="Hello" />);

    const item = screen.getByText("Hello");

    expect(item).toBeInTheDocument();
  });
});
