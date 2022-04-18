import { useState, useEffect } from "react";
import { getTop10s } from "../services/top10";
import Top10 from "../components/Top10";
import { Link } from "react-router-dom";

export default function Top10s() {
  const [top10s, setTop10s] = useState([]);

  useEffect(() => {
    const fetchTop10s = async () => {
      const allTop10s = await getTop10s();
      setTop10s(allTop10s);
    };

    fetchTop10s();
  }, []);

  return (
    <div>
      <h1>The Top 10 Skyscrapers in New York City</h1>

      {top10s.map((top10Data) => (
        <div>
          <Top10 key={top10Data._id} top10={top10Data} />
        </div>
      ))}

    </div>
  );
}
