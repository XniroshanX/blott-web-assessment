import { render, screen, waitFor } from "@testing-library/react";
import NewsPage from "../../app/news/page";
import { getMarketNews } from "../../services/http";
import { newsResponse } from "../mocks/news";

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
    const [firstNews] = newsResponse;

    getMarketNews.mockResolvedValueOnce({ data: newsResponse });
    render(<NewsPage />);

    await waitFor(() => {
      const headlines = screen.getAllByText(firstNews.headline);
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
