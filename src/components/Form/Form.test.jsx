import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

function setup(component) {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}

test("Form", async () => {
  const handleSubmit = jest.fn((e) => {
    e.preventDefault();
  });

  const { user } = setup(<Form handleSubmit={handleSubmit} />);

  const button = screen.getByRole("button");

  await user.click(button);

  expect(handleSubmit).toHaveBeenCalled();
});
