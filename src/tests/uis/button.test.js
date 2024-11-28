import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../components/uis/button";

describe("Button Component", () => {
  const mockLabel = "Click Me";

  it("renders the button with the correct label", () => {
    render(<Button label={mockLabel} />);
    const button = screen.getByRole("button", { name: mockLabel });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(mockLabel);
  });

  it("triggers the onClick handler when clicked", () => {
    const mockOnClick = jest.fn();
    render(<Button label={mockLabel} onClick={mockOnClick} />);
    const button = screen.getByRole("button", { name: mockLabel });

    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("uses the default onClick handler without errors", () => {
    render(<Button label={mockLabel} />);
    const button = screen.getByRole("button", { name: mockLabel });

    // Clicking without a provided onClick should not throw an error
    fireEvent.click(button);
  });

  it("applies the correct styles", () => {
    render(<Button label={mockLabel} />);
    const button = screen.getByRole("button", { name: mockLabel });

    expect(button).toHaveClass(
      "bg-sky-500 px-5 py-5 rounded-full w-64 text-2xl font-semibold"
    );
  });
});
