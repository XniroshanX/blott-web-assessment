import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "https://finnhub.io/api/v1",
// });

export const getMarketNews = () => {
  return axios.get(
    "https://finnhub.io/api/v1/news?token=crals9pr01qhk4bqotb0crals9pr01qhk4bqotbg&CATEGORYcategory=general&limit=10"
  );
};
