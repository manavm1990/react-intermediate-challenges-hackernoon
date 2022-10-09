import List from "components/List/List";
import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const [data, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return loading ? <p>Loading...</p> : <List items={data} />;
}

export default App;
