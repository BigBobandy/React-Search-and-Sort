import { useState } from "react";
import "./App.css";

function App() {
  const [size, setSize] = useState(11);
  const [array, setArray] = useState([size]);

  return (
    <div>
      <h1>Search & Sort Showdown: Comparing Algorithms</h1>
    </div>
  );
}

export default App;
