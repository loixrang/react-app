import { useState } from "react";

interface Player {
  name: string;
  chips: number;
}
const BlackJack = ({name, chips}: Player) => {
  
  const [prompt, setPrompt] = useState('Want to play a round?')
  // const [card, setCard] = useState('')
  const [total, setTotal] = useState<number>(0)
  const [isALive, setIsAlive] = useState(false)
  const [hasBlackJack, setHasBlackJack] = useState(false)
  let [cards, setCards] = useState<number[]>([])
  
  // let cards: number[]
  let sum = 0;
  // let message: string;
  let sumEl;

  function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard === 1) {
      return 11;
    } else if (randomCard > 10) {
      return 10;
    } else {
      return randomCard;
    }
  }

  function startGame() {
    setIsAlive(true)
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    setCards(prev => [...prev, firstCard, secondCard])
    sum = firstCard + secondCard;
    setTotal(sum)
    renderGame();
  }

  function renderGame() {
    if (total <= 20) {
      setPrompt("do you want to draw a new card?")
    } else if (total === 21) {
      setPrompt("Wohoo! You've got a Blackjack!")
      setHasBlackJack(true)
      setIsAlive(false)
    } else {
      setPrompt("You're outta the game son")
      setIsAlive(false)
    }
  }

  function newCard() {
    if (hasBlackJack || !isALive) {
      setPrompt("you can't play anymore. Start Game")
      return
    } else {
      let card = getRandomCard();
      sum += card;
      setTotal(prev => prev + sum)
      setCards(prev => [...prev, card])
      renderGame();
    }
  }
  return (
    <main className="bg-green-700 text-white flex items-center justify-center flex-col h-dvh font-sans">
      <h1 className="text-[goldenrod] text-2xl font-black">Blackjack</h1>
      <p className="font-bold italic text-white py-2">{prompt}</p>
      <p className="">Card: {cards.join(", ")}</p>
      <p>Sum: {total}</p>
      <button onClick={startGame}>Start Game</button>
      <button onClick={newCard}>New Card</button>
      <p>{name + ": $" + chips}</p>
    </main>
  );
};

export default BlackJack;
