import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { binarySearch, sequentialSearch } from "../helpers/searchAlgorithms";
import { bubbleSort, insertionSort } from "../helpers/sortAlgorithms";

function SearchInput({ setSearchTerm, array, size, setSearchResults }) {
  //Create a state variable to store the input value
  const [inputValue, setInputValue] = useState("");

  //Function to handle form submission
  const handleSubmit = (e) => {
    //Prevents the page from reloading on submission
    e.preventDefault();

    if (inputValue.trim()) {
      setSearchTerm(inputValue);

      const binaryResult = binarySearch(array, size, inputValue);
      const sequentialResult = sequentialSearch(array, size, inputValue);

      // Passing the search results to the setSearchResults function
      setSearchResults({
        binaryResult: { ...binaryResult, inputValue },
        sequentialResult: { ...sequentialResult, inputValue },
      });
    }

    //Clears input field after search
    setInputValue("");
  };

  //Function that handles changes in the input value
  const handleChange = (e) => {
    //Update the inputValue state with the new input value
    setInputValue(e.target.value);
    setSearchTerm(e.target.value); // Set the searchTerm in the parent component
  };

  //Return the JSX markup for the Search component
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
    </form>
  );
}

export default SearchInput;
