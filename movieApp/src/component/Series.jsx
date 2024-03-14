import { TotalCard } from "./totalCard.jsx";
import { useState } from "react";

export default function Series() {
  const [page, setPage] = useState(1);
  return (
    <div className="pt-[40px] px-[50px]">
      <TotalCard value={"tv"} page={page} />
    </div>
  );
}
