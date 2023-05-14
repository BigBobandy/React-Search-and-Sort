function SearchResult({ searchResults }) {
  let result = [];

  console.log(searchResults);

  if (searchResults) {
    // Deconstructing the searchResults object
    const { binaryResult, sequentialResult } = searchResults;

    // Setting the search results for the binary search method
    if (binaryResult.found === true && binaryResult.searches === 1) {
      result.push(
        `It took ${binaryResult.searches} search using the ${binaryResult.type} search algorithm to find ${binaryResult.inputValue}. `
      );
    } else if (binaryResult.found === true) {
      result.push(
        `It took ${binaryResult.searches} searches using the ${binaryResult.type} search algorithm to find ${binaryResult.inputValue}.`
      );
    }

    // Setting the search results for the sequential search method
    if (searchResults.found === true && sequentialResult.searches === 1) {
      result.push(
        `It took ${sequentialResult.searches} search using the ${sequentialResult.type} search algorithm to find ${sequentialResult.inputValue}. `
      );
    } else if (sequentialResult.found === true) {
      result.push(
        `It took ${sequentialResult.searches} searches using the ${sequentialResult.type} search algorithm to find ${sequentialResult.inputValue}.`
      );
    }

    if (!binaryResult.found && !sequentialResult.found) {
      result.push(
        "The number you entered couldn't be found. Please enter a number from the array above."
      );
    }

    console.log(binaryResult);
    console.log(sequentialResult);
    console.log(result);
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
