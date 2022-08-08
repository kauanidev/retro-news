import axios from "axios";
import { useEffect, useState } from "react";
import { LatestItem } from "../../components/LatestItem";
import { NewsItem } from "../../components/NewsItem";
import { HomeContainer, LatestContainer, NewsContainer } from "./styles";

export function Home() {
  const [news, setNews] = useState([]);

  async function getNews() {
    const response = await axios.get(
      "https://api.currentsapi.services/v1/latest-news",
      {
        params: {
          language: "pt",
          apiKey: import.meta.env.VITE_API_KEY,
        },
      }
    );

    setNews(response.data.news);
  }

  useEffect(() => {
    getNews();
  }, []);

  const latest = news.slice(0, 4);
  const random = news.slice(4, news.length);

  return (
    <HomeContainer>
      <h1>Notícias mais recentes</h1>
      <LatestContainer>
        {latest.map((item) => {
          return <LatestItem key={item.id} data={item} />;
        })}
      </LatestContainer>
      <h2>Notícias diversas</h2>
      <NewsContainer>
        {random.map((item) => {
          return <NewsItem key={item.id} data={item} />;
        })}
      </NewsContainer>
    </HomeContainer>
  );
}
