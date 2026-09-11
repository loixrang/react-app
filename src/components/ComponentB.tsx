import ComponentC from "./ComponentC"

const ComponentB = () => {
  return (
    <div className="border-3 p-6">
      <h1>ComponentB</h1>
      <ComponentC/>
    </div>
  )
}

export default ComponentB