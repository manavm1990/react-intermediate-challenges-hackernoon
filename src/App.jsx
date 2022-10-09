import List from "components/List/List";
import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const [data, loading, setData] = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return loading ? (
    <p>Loading...</p>
  ) : (
    <List items={data} handleDelete={handleDelete} />
  );
}

export default App;
