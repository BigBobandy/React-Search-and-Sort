import { useState } from "react";

function SelectMenus() {
  return (
    <div>
      <section>
        <select name="size-selector" id="size-selector">
          <option value="11">Array Size: 10</option>
          <option value="21">Array Size: 20</option>
          <option value="41">Array Size: 40</option>
          <option value="61">Array Size: 60</option>
          <option value="81">Array Size: 80</option>
        </select>
      </section>
      <section>
        <select name="iteration-selector" id="sort-iteration-selector">
          <option value="50">500 Sort Iterations</option>
          <option value="100">1,000 Sort Iterations</option>
          <option value="1000">10,000 Sort Iterations</option>
          <option value="10000">100,000 Sort Iterations</option>
          <option value="100000">1,000,000 Sort Iterations</option>
        </select>
      </section>
    </div>
  );
}

export default SelectMenus;
