import List from "components/List/List";
import "./App.css";
import useFetch from "./hooks/useFetch";
import AddTodo from "./layout/AddTodo/AddTodo";

function App() {
  const [data, loading, setData] = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const newTodo = form.elements[0].value;
    form.reset();

    setData((prev) => [
      ...prev,
      { id: prev.length + 1, title: newTodo, completed: false },
    ]);
  };

  return (
    <>
      <AddTodo handleSubmit={handleSubmit} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <List items={data} handleDelete={handleDelete} />
      )}
      ;
    </>
  );
}

export default App;
