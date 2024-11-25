export default function App() {
  function getTodos(id: number) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  getTodos(1);

  return <div>App</div>;
}
