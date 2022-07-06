import "./App.css";
import { useState } from "react";

function App(event) {
  const [list, setList] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = (event) => {
    setList(event.target.value);
  };
  const handleClick = () => {
    setResult([...result, list]);
    setList("");
  };
  const DeleteElement = (event) => {
    
     const temp = [...result];
     temp.splice(event,result.indexOf(event.target.value));
     setResult(temp);
  };

  return (
    <div>
      <input
        value={list}
        placeholder="Enetr text here"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add To List</button>
      <button onClick={DeleteElement}>Delete</button>
      {result.map((item) => {
        return (
          <div>
            <h1>{item}</h1>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
