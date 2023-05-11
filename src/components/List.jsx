import React, { useEffect, useState } from "react";
import { populateArray } from "../helpers/helperFunctions";

function List({ array, size }) {
  // Creating state vaue and setter for the array
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Create an array based on size variable
    const newArray = populateArray([], size);

    setItems(newArray);
  }, [size]); // This array is the dependency list for the effect

  // Render the list
  return (
    <ul className="list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
