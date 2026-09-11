import ComponentD from "./ComponentD"

const ComponentC = () => {
  return (
    <div className="border-3 p-6">
      <h1>ComponentC</h1>
      <ComponentD/>
    </div>
  )
}

export default ComponentC