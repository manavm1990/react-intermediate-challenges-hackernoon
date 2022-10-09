import { render, screen } from "@testing-library/react";
import List from "./List";

describe("List", () => {
  it("renders the list with the proper items", () => {
    const items = [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
      },
    ];
    render(<List items={items} />);

    const list = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");

    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(2);
  });
});
