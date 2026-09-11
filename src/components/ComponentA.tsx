import { createContext, useState } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext("");

const ComponentA = () => {
  const [user, setUser] = useState("Samuel");
  return (
    <div className="border-3 p-6">
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
