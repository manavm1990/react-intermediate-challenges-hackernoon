import { useEffect, useState } from "react";

export default function useFetch(
  url = "https://jsonplaceholder.typicode.com/todos"
) {
  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      });
  }, [url]);

  return [todos, loading];
}
