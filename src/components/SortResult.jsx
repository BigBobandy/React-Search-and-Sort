import React, { useEffect, useState } from "react";
import { measureAverageSortTime } from "../helpers/helperFunctions";
import { bubbleSort, insertionSort } from "../helpers/sortAlgorithms";

function SortResult({ array }) {
  const [results, setResults] = useState({
    bubbleSort: null,
    insertionSort: null,
  });

  useEffect(() => {
    const numRuns = 10; // Number of runs for average time calculation
    const insertionSortAverageTime = measureAverageSortTime(
      insertionSort,
      array,
      numRuns
    );
    const bubbleSortAverageTime = measureAverageSortTime(
      bubbleSort,
      array,
      numRuns
    );

    setResults({
      bubbleSort: bubbleSortAverageTime,
      insertionSort: insertionSortAverageTime,
    });
  }, [array]);

  return (
    <div>
      <h2>Sort Results:</h2>
      <p>Bubble sort average time: {results.bubbleSort} ms</p>
      <p>Insertion sort average time: {results.insertionSort} ms</p>
    </div>
  );
}

export default SortResult;
