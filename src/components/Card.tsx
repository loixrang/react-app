import myPhoto from '/src/assets/me.jpg'

function Card() {
  return (
    <div className="border border-[hsl(0,0%,80%)] rounded-md drop-shadow-xl shadow-lg inline-block text-center p-5 max-w-64 m-5">
      <img src={myPhoto} className='max-w-[60%] h-auto mx-auto justify-center rounded-sm mb-2' alt="profile picture" />
      <h2 className='font-sans text-[hsl(0,0%,20%)] text-2xl'>Samuel</h2>
      <p className='font-sans text-[hsl(0,0%,40%)]'>I'm a student of computer science and play games</p>
    </div>
  )
}

export default Card