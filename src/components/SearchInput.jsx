import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function SearchInput(props) {
  //Create a state variable to store the input value
  const [inputValue, setInputValue] = useState("");

  //Function to handle form submission
  const handleSubmit = (e) => {
    //Prevents the page from reloading on submission
    e.preventDefault();
    //Clears input field after search
    setInputValue("");
  };

  //Function that handles changes in the input value
  const handleChange = (e) => {
    //Update the inputValue state with the new input value
    setInputValue(e.target.value);
    props.setSearchTerm(e.target.value); // Set the searchTerm in the parent component
  };

  //Return the JSX markup for the Search component
  return (
    <form className="search-wrapper" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit" className="search-icon">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
}

export default SearchInput;
