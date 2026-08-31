import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
} 

function ListGroup({items, heading, onSelectItem}: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading }</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="border cursor-pointer bg-amber-400 text-blue-700 border-gray-500">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "active" : ""}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
