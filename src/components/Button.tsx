const Button = () => {
  
  let count = 0
  const handleClick = (name: string) => {
    if (count < 3) {
      count++
      console.log(`${name} you clicked me ${count} time(s)`)
      return
    }
    console.log(`${name} stop clicking me!!`)
  }

  return (
    <button onClick={() => handleClick('Samuel')} className="cursor-pointer">Click Me 😊</button>
  )
}

export default Button