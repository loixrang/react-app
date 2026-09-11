import { useContext } from "react"
import { UserContext } from "./ComponentA"

const ComponentD = () => {
  const user = useContext(UserContext)

  return (
    <div className="border-3 p-6">
      <h1>ComponentD</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  )
}

export default ComponentD