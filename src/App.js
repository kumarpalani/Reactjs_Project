import ReactDOM from "react-dom/client";
import useFetch from "./Fetch";

export default function Home() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      {data &&
        data.map((item) => (
          <p style={{ color: "Blue" }} key={item.id}>
            {item.title}
          </p>
        ))}
    </>
  );
}
