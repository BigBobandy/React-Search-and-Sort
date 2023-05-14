import React, { useEffect, useState } from "react";
import List from "../components/List";
import SearchInput from "../components/SearchInput";
import SearchResults from "../components/SearchResults";
import SelectMenus from "../components/SelectMenus";
import SortResults from "../components/SortResults";
import { populateArray } from "../helpers/helperFunctions";

function MainPage() {
  const [size, setSize] = useState(41);
  const [array, setArray] = useState([size]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [sortResults, setSortResults] = useState(null);
  const [numIterations, setNumIterations] = useState(100);

  useEffect(() => {
    setArray(populateArray([], size));
  }, [size]);

  return (
    <div className="main-container">
      <div className="top-container">
        <h1>Search & Sort Showdown: Comparing Algorithms</h1>
        <h3>
          Choose a number from the array below to compare the efficiency of
          binary and sequential search algorithms in finding your selected
          number, as well as the performance of bubble sort and insertion sort
          in sorting the array
        </h3>
        <SelectMenus />
        <SearchInput
          setSearchTerm={setSearchTerm}
          array={array}
          size={size}
          setSearchResults={setSearchResults}
          setSortResults={setSortResults}
          numIterations={numIterations}
        />
        <List array={array} size={size} />
      </div>
      <SearchResults searchResults={searchResults} inputValue={searchTerm} />
      <SortResults sortResults={sortResults} />
    </div>
  );
}

export default MainPage;
