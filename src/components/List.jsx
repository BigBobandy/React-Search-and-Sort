function List({ array }) {
  // Render the list
  return (
    <ul className="list">
      {array.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
