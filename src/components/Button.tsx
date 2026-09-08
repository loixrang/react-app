const Button = () => {
  
  const handleClick = () => console.log('OUCH!')
  const handleClick2 = (name: string) => console.log(`${name} stop clicking me!`)

  return (
    <button onClick={() => handleClick2("James")}>Click Me 😊</button>
  )
}

export default Button