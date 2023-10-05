import { useEffect, useState } from "react";
import ShowNewsCard from "./ShowNewsCard";

const NewsHome = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("/data/news.json")
      .then((res) => res.json())
      .then((news) => setNews(news))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="px-5">
      <h3 className="text-2xl font-bold mb-5">
        Dragon News Home ({news.length})
      </h3>
      {news.map((aNews) => (
        <ShowNewsCard key={aNews._id} aNews={aNews}></ShowNewsCard>
      ))}
    </div>
  );
};

export default NewsHome;
