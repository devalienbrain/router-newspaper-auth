import { length } from "localforage";
import { useEffect, useState } from "react";

const NewsHome = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("/public/data/news.json")
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
        <p key={aNews._id}>{aNews.title}</p>
      ))}
    </div>
  );
};

export default NewsHome;
