//test nnti hapus maybe
import { useEffect, useState } from "react";
import { getNews } from "../services/api";

interface News {
  id: number;
  title: string;
  description: string;
  status: string;
}

export default function NewsPage() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    getNews().then(setNews);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-3">News List</h1>
      <ul>
        {news.map((item) => (
          <li key={item.id} className="border p-2 mb-2 rounded">
            <strong>{item.title}</strong>
            <p>{item.description}</p>
            <small>Status: {item.status}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
