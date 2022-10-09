import { render, screen } from "@testing-library/react";
import List from "./List";

describe("List", () => {
  it("renders the list with the proper items", () => {
    const items = ["Hello", "World"];
    render(<List items={items} />);

    const list = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");

    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(2);
  });
});
