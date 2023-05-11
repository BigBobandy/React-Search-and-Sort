import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import SearchInput from "./components/SearchInput";
import { populateArray } from "./helpers/helperFunctions";
import HomePage from "./pages/HomePage";

function App() {
  const [size, setSize] = useState(11);
  const [array, setArray] = useState([size]);

  console.log(array);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more Route components for each page */}
      </Routes>
    </Router>
  );
}

export default App;
