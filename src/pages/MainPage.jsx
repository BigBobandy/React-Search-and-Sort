import React, { useEffect, useState } from "react";
import List from "../components/List";
import SearchInput from "../components/SearchInput";
import SearchResults from "../components/SearchResults";
import SelectMenus from "../components/SelectMenus";
import SortResults from "../components/SortResults";
import "../components/styles/MainPage.css";
import { populateArray } from "../helpers/helperFunctions";

function MainPage() {
  const [size, setSize] = useState(11);
  const [selectedSize, setSelectedSize] = useState(size);
  const [array, setArray] = useState(populateArray([], size));
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [sortResults, setSortResults] = useState(null);
  const [numIterations, setNumIterations] = useState(500);
  const [selectedIterations, setSelectedIterations] = useState(numIterations);

  // This hook runs when selectedSize changes.
  // It updates the size and array state variables to reflect the selected size.
  useEffect(() => {
    setSize(selectedSize);
    setArray(populateArray([], selectedSize));
    console.log(array);
  }, [selectedSize]);

  // This hook runs when selectedIterations changes.
  // It updates the numIterations state variable to reflect the selected number of iterations.
  useEffect(() => {
    setNumIterations(selectedIterations);
  }, [selectedIterations]);

  // This function is called when the size dropdown menu is changed.
  // It updates selectedSize to reflect the chosen size.
  function handleSizeSelect(event) {
    setSelectedSize(Number(event.target.value));
  }

  // This function is called when the iterations dropdown menu is changed.
  // It updates selectedIterations to reflect the chosen number of iterations.
  function handleIterationSelect(event) {
    setSelectedIterations(Number(event.target.value));
  }

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
        <SelectMenus
          onSizeSelect={handleSizeSelect}
          onIterationSelect={handleIterationSelect}
        />
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
