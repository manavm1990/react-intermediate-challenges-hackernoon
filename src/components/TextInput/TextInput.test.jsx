import { render, screen } from "@testing-library/react";
import TextInput from "./TextInput";

describe("TextInput", () => {
  it("renders the text input with the proper label", () => {
    render(<TextInput label="Hello" />);

    const input = screen.getByLabelText("Hello");

    expect(input).toBeInTheDocument();
  });
});
