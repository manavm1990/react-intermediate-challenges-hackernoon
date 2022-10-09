import { useEffect, useState } from "react";

export default function useTodos(
  url = "https://jsonplaceholder.typicode.com/todos"
) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      });
  }, []);

  return [todos, loading];
}
