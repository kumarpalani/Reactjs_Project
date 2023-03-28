import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [url]);

  return [data];
};

export default useFetch;
