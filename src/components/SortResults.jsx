function SortResults({ sortResults }) {
  let result = [];

  if (sortResults && sortResults.bubble && sortResults.insertion) {
    // Deconstructing the sortResults object
    const { bubble, insertion } = sortResults;

    // Setting the sort results for the bubble sort method
    result.push(
      `It took ${bubble.time.toFixed(
        2
      )} microseconds on average using the Bubble Sort algorithm over ${bubble.iterations.toLocaleString()} iterations.`
    );

    // Setting the sort results for the insertion sort method
    result.push(
      `It took ${insertion.time.toFixed(
        2
      )} microseconds on average using the Insertion Sort algorithm over ${insertion.iterations.toLocaleString()} iterations.`
    );
  }

  return (
    <div>
      <h2>Sort Results:</h2>
      {result.map((res, index) => (
        <p key={index}>{res}</p>
      ))}
    </div>
  );
}

export default SortResults;
