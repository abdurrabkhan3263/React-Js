import { useState, useEffect } from "react";

export function useCalling(site, page) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${site}/top_rated?api_key=d200b667c03f27a9799e244340744b29&page=${page}`
    )
      .then((res) => {
        return res.json();
      })
      .then((value) => {
        setData(value);
      })
      .catch((err) => console.log(err));
  }, [site]);
  return data;
}
