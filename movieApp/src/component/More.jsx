import { useParams } from "react-router-dom";

export default function More() {
  let { useId } = useParams();
  return (
    <>
      <h1>MOVIES</h1>
      <h1>User: {useId}</h1>
    </>
  );
}
