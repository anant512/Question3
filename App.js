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
  const DeleteElement = (idx) => {
    // setResult(result.slice(result.indexOf(event.target.value,0)));
    // setResult([...result.slice(0,index,...result.slice(index,result.length))])
     // assigning the list to temp variable
     const temp = [...result];
     temp.splice(result.slice(result.indexOf(idx.target.value)));
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
