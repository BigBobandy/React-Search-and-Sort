import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="main-container">
      <h1>Search & Sort Showdown: Comparing Algorithms</h1>
      <h3>
        Dive into the world of search and sort algorithms by comparing binary
        and sequential search methods along with bubble and insertion sort
        techniques. Pick a number from a given array of random numbers and watch
        how each algorithm tackles the task of finding your number and sorting
        the list.
      </h3>
      <Link to="/main">
        <button className="begin-btn">Begin</button>
      </Link>
    </div>
  );
}

export default HomePage;
