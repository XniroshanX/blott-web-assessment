"use client";
import NewsThumbnail from "@/components/shared/newsThumbnail";
import NewsSectionContainer from "@/components/templates/newsSectionContainer";
import NewsSectionHeader from "@/components/templates/newsSectionHeader";
import { getMarketNews } from "@/services/http";
import { News } from "@/types/news";
import { useEffect, useState } from "react";

const NewsPage = () => {
  const [newsData, setNewsData] = useState<News[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      try {
        setLoading(true);
        const newsResponse = await getMarketNews();
        setNewsData(newsResponse.data);
      } catch (error) {
        setError("Something went wrong. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    getNews();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <NewsSectionHeader />
      <NewsSectionContainer />
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-1 lg:grid-cols-4">
        {error}
        {newsData.map((news, i) => (
          <NewsThumbnail
            url={news.url}
            key={i}
            thumbnail={news.image}
            source={news.source}
            date={news.datetime}
            title={news.headline}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
