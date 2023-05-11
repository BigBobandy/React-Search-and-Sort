import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function SearchInput() {
  //Create a state variable to store the input value
  const [inputValue, setInputValue] = useState("");

  //Function to handle form submission
  const handleSubmit = (e) => {
    //Prevents the page from reloading on submission
    e.preventDefault();

    //Checks if the field is empty or not and executes the code if the input field is valid
    if (inputValue.trim()) {
      //Call the onSearch function using the current input value
      onSearch(inputValue);
      //Clears input field after search
      setInputValue("");
    }
  };

  //Function that handles changes in the input value
  const handleChange = (e) => {
    //Update the inputValue state with the new input value
    setInputValue(e.target.value);
  };

  //Return the JSX markup for the Search component
  return (
    //Form element with the onSubmit event handler
    //The value attribute in the input element is bound to the inputValue state variable.
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
