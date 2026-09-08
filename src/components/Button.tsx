const Button = () => {
  
  let count = 0
  const handleClick = (e: unknown) => e.target.textContent = 'Ouch! 😕'

  return (
    <button onDoubleClick={(e) => handleClick(e)} className="cursor-pointer">Click Me 😊</button>
  )
}

export default Button