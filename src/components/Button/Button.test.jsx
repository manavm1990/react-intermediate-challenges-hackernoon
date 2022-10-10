import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

function setup(component) {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}

describe("Button", () => {
  it("renders the button with the proper text", () => {
    render(<Button txt="Hello" />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Hello");
  });

  it("calls the onClick handler when clicked", async () => {
    const onClick = jest.fn();

    const { user } = setup(<Button handleClick={onClick} txt="Hello" />);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
