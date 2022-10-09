import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

function setup(component) {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}

describe("App", () => {
  it("loads todos", async () => {
    render(<App />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(await screen.findByText("delectus aut autem")).toBeInTheDocument();
  });

  it("deletes a todo", async () => {
    const { user } = setup(<App />);

    const todo = await screen.findByText("delectus aut autem");
    const deleteButton = within(todo).getByRole("button");

    await user.click(deleteButton);

    expect(todo).not.toBeInTheDocument();
  });
});
