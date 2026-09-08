import { useState } from "react"

const MyComponent = () => {
  let [name, setName] = useState("")

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  return (
    <div className="p-3">
      <input value={name} onChange={handleNameChange} className="border border-blue-800" type="text" />
      <p>Name: {name}</p>
    </div>
  )

  //Bro code stopped at 1:51:32
}

export default MyComponent