import { Card } from "./Card.jsx";
import { useCalling } from "../Hooks/useApi.js";
import { useEffect, useState } from "react";

export function TotalCard({ value, page }) {
  let data = useCalling(value, page);
  data = data["results"];

  return (
    <div
      id="total-card"
      className="flex flex-wrap justify-between gap-y-[50px] mb-[40px]"
    >
      {data &&
        data.map((value) => {
          return (
            <Card
              id={value.id}
              img={`https://media.themoviedb.org/t/p/w220_and_h330_face${value.backdrop_path}`}
              value={value}
            />
          );
        })}
    </div>
  );
}
