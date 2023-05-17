function SelectMenus(props) {
  console.log(props);
  return (
    <div>
      <select
        onChange={props.onSizeSelect}
        name="size-selector"
        id="size-selector"
      >
        <option value="11">Array Size: 10</option>
        <option value="21">Array Size: 20</option>
        <option value="41">Array Size: 40</option>
        <option value="61">Array Size: 60</option>
        <option value="81">Array Size: 80</option>
      </select>

      <select
        onChange={props.onIterationSelect}
        name="iteration-selector"
        id="sort-iteration-selector"
      >
        <option value="500">500 Sort Iterations</option>
        <option value="1000">1,000 Sort Iterations</option>
        <option value="10000">10,000 Sort Iterations</option>
        <option value="100000">100,000 Sort Iterations</option>
        <option value="1000000">1,000,000 Sort Iterations</option>
      </select>
    </div>
  );
}

export default SelectMenus;
