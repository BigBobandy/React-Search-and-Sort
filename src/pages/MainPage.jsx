import React, { useState } from "react";
import List from "../components/List";
import SearchInput from "../components/SearchInput";

function MainPage() {
  const [size, setSize] = useState(11);
  const [array, setArray] = useState([size]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(array);

  return (
    <div>
      <h3>
        Choose a number from the array below to compare the efficiency of binary
        and sequential search algorithms in finding your selected number, as
        well as the performance of bubble sort and insertion sort in sorting the
        array
      </h3>
      <SearchInput setSearchTerm={setSearchTerm} />
      <List array={array} size={size} />
    </div>
  );
}

export default MainPage;
