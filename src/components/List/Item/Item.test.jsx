import { render, screen, within } from "@testing-library/react";
import Item from "./Item";

describe("Item", () => {
  it("renders the item with the proper text", () => {
    render(<Item txt="Hello" />);

    const item = screen.getByRole("listitem");

    expect(item).toBeInTheDocument();
  });

  it("renders the item with the proper text and children", () => {
    render(<Item txt="Hello" renderContent={() => <span>World</span>} />);

    const item = screen.getByRole("listitem");
    const content = within(item).getByText("World");

    expect(item).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
