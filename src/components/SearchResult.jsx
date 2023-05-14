function SearchResult({ searchResults }) {
  let result = [];
  let type;

  console.log(searchResults);

  if (searchResults) {
    const { binaryResult, sequentialResult } = searchResults;

    if (binaryResult.found === true && binaryResult.searches === 1) {
      type = "Binary";
      result.push(
        `It took ${binaryResult.searches} search using the ${type} search algorithm to find ${binaryResult.inputValue}.`
      );
    } else if (binaryResult.found === true) {
      type = "Binary";
      result.push(
        `It took ${binaryResult.searches} searches using the ${type} search algorithm to find ${binaryResult.inputValue}.`
      );
    }

    if (sequentialResult.found === true && sequentialResult.searches === 1) {
      type = "Sequential";
      result.push(
        `It took ${sequentialResult.searches} search using the ${type} search algorithm to find ${sequentialResult.inputValue}.`
      );
    } else if (sequentialResult.found === true) {
      type = "Sequential";
      result.push(
        `It took ${sequentialResult.searches} searches using the ${type} search algorithm to find ${sequentialResult.inputValue}.`
      );
    }

    if (!binaryResult.found && !sequentialResult.found) {
      result.push(
        "The number you entered could not be found. Please enter a number from the array above."
      );
    }
  }

  return (
    <div>
      <h2>Search Results:</h2>
      {result.map((res, index) => (
        <p key={index}>{res}</p>
      ))}
    </div>
  );
}

export default SearchResult;
