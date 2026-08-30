function ListGroup() {
  const items = ["New York", "San Francisco", "Lagos", "London", "Paris"];

  return (
    <>
      <h1>List</h1>
      <ul className="border bg-amber-400 text-blue-700 border-gray-500">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </>
  );
}

export default ListGroup;
