import { useState } from "react"

const MyComponent = () => {
  let [food, setFood] = useState<string[]>(["Apple", "Orange", "Banana"])

  const handleAddFood = () => {
    const newFood: unknown = document.getElementById("foodInput")?.value
    document.getElementById("foodInput").value = ''
    setFood(prev =>[...prev, newFood])
  }
  const handleRemoveFood = (index: unknown) => {
    setFood(food.filter((_, i) => i !== index))
  }

  return (
    <div className="m-2">
      <h2>List of food</h2>
      <ul>
        {food.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
      </ul>
      <input className="border border-amber-500 p-0.5 mr-2" type="text" id="foodInput" placeholder="Enter food name"/>
      <button onClick={handleAddFood}>Add food</button>
    </div>
  )
}

export default MyComponent