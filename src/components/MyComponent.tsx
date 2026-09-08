import { useState } from "react"

const MyComponent = () => {
  let [name, setName] = useState("Guest")

  const updateName = () => {
    setName("James")
  }

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
    </div>
  )

  //Bro code stopped at 1:51:32
}

export default MyComponent