import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const deleteToDo = (index) => {
    setToDos((curToDos) =>
      curToDos.filter((_, curIndex) => curIndex !== index)
    );
  };
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");
  };
  useEffect(() => {
    console.log("current Todos", toDos);
  }, [toDos]);
  return (
    <div>
      <h1>My ToDos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>

      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteToDo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
