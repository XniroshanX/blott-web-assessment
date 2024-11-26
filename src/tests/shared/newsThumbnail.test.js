import { render, screen } from "@testing-library/react";
import NewsThumbnail from "../../components/shared/newsThumbnail";
import { getDateByTimestamp } from "../../services/date";

jest.mock("../../services/date", () => ({
  getDateByTimestamp: jest.fn((timestamp) => `FormattedDate(${timestamp})`),
}));

describe("NewsThumbnail Component", () => {
  const mockProps = {
    url: "https://example.com/news",
    thumbnail: "/blott.png",
    source: "Example Source",
    date: "1672531200",
    title: "Example News Title",
  };

  it("calls `getDateByTimestamp` with the correct date", () => {
    render(<NewsThumbnail {...mockProps} />);
    expect(getDateByTimestamp).toHaveBeenCalledWith(mockProps.date);
  });
});
