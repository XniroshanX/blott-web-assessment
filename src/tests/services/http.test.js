import axios from "axios";
import { getMarketNews } from "../../services/http";
import { newsResponse } from "../mocks/news";

jest.mock("axios");

afterEach(() => {
  jest.clearAllMocks();
});

describe("getMarketNews", () => {
  const url =
    "https://finnhub.io/api/v1/news?token=crals9pr01qhk4bqotb0crals9pr01qhk4bqotbg&CATEGORYcategory=general&limit=10";
  it("Should call the axios get API when get market news", async () => {
    axios.get.mockResolvedValue({ data: newsResponse });
    await getMarketNews();
    expect(axios.get).toHaveBeenCalledWith(url);
  });
});
