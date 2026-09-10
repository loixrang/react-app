import { useEffect, useState } from "react";

const UpdateTitle = () => {
  const [count, setCount] = useState<number>(0);
  const addCount = () => {
    setCount((c) => c + 1);
  };
  const removeCount = () => {
    setCount((c) => c - 1);
  };
  useEffect(()=> {
    document.title = `Count: ${count}`
  }, [count])
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={removeCount}>Subtract</button>
    </div>
  );
};

export default UpdateTitle;
