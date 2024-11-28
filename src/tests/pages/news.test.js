import { render, screen, waitFor } from "@testing-library/react";
import NewsPage from "../../app/news/page";
import { getMarketNews } from "../../services/http";

jest.mock("../../services/http", () => ({
  getMarketNews: jest.fn(),
}));

describe("NewsPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders loading state", () => {
    getMarketNews.mockResolvedValueOnce({ data: [] });

    render(<NewsPage />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("renders news items when data is fetched", async () => {
    const mockNews = [
      {
        url: "https://example.com/news1",
        image: "https://example.com/image1.jpg",
        source: "Source 1",
        datetime: "2024-11-28T12:00:00Z",
        headline: "Headline 1",
      },
      {
        url: "https://example.com/news2",
        image: "https://example.com/image2.jpg",
        source: "Source 2",
        datetime: "2024-11-28T13:00:00Z",
        headline: "Headline 2",
      },
    ];

    getMarketNews.mockResolvedValueOnce({ data: mockNews });
    render(<NewsPage />);

    // Wait for news items to be rendered
    await waitFor(() => {
      const headlines = screen.getAllByText("Headline 1");
      expect(headlines.length).toBe(2);
    });
  });

  test("renders error message if there is an error fetching data", async () => {
    getMarketNews.mockRejectedValueOnce(new Error("Network error"));

    render(<NewsPage />);

    await waitFor(() =>
      expect(
        screen.getByText("Something went wrong. Please try again later.")
      ).toBeInTheDocument()
    );
  });
});
