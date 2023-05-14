import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { measureAverageSortTime } from "../helpers/helperFunctions";
import { binarySearch, sequentialSearch } from "../helpers/searchAlgorithms";
import { bubbleSort, insertionSort } from "../helpers/sortAlgorithms";

function SearchInput({
  setSearchTerm,
  array,
  size,
  setSearchResults,
  setSortResults,
  numIterations,
}) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      setError("Please enter a number before searching.");
    } else {
      setError(""); // clear the error message
      setSearchTerm(inputValue);

      const binaryResult = binarySearch(array, size, inputValue);
      const sequentialResult = sequentialSearch(array, size, inputValue);

      // Passing the search results to the setSearchResults function
      setSearchResults({
        binaryResult: { ...binaryResult, inputValue },
        sequentialResult: { ...sequentialResult, inputValue },
      });

      // Call the handleSorts() function
      handleSorts();

      //Clears input field after search
      setInputValue("");
    }
  };

  // Handles calling the sort algorithms and measuring the time taken to sort the array
  async function handleSorts() {
    const bubbleResult = await measureAverageSortTime(
      bubbleSort,
      array,
      numIterations
    );

    const insertionResult = await measureAverageSortTime(
      insertionSort,
      array,
      numIterations
    );

    // Object that has the sort type as the key and result as the value
    let sortResults = {
      bubble: bubbleResult,
      insertion: insertionResult,
    };

    // Passing the sort results to the setSortResults function
    setSortResults(sortResults);
  }

  // Handles changes in the input field
  const handleChange = (e) => {
    // Only update the inputValue state if the new input value is a number and is less than or equal to 2 digits
    if (!isNaN(e.target.value) && e.target.value.length <= 2) {
      setInputValue(e.target.value);
      setSearchTerm(e.target.value); // Set the searchTerm in the parent component
    }
  };

  return (
    <form className="search-wrapper" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-bar"
        placeholder="Enter a number..."
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit" className="search-icon">
        Search
        <FontAwesomeIcon icon={faSearch} />
      </button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default SearchInput;
