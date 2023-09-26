import { Link } from "react-router-dom"
import Card from "../components/card";
import { useDispatch, useSelector } from "react-redux"
import { removeCard, selectAllCards, setActiveCard } from "../features/cards/cardsSlice";


export default function Home() {
  const dispatch = useDispatch()
  const cards = useSelector(selectAllCards)

  return (
    <>
      <ul className="w-full flex flex-col items-center">
        {cards.map((card, i) => {
            return (
              <li key={i} className="relative group transition-[height] duration-500 delay-100 ease-in-out h-16 hover:h-52 first:mb-5 first:h-fit first:hover:h-fit last:h-fit last:hover:h-fit">
                {i === 0 && <p className="text-center">Activt kort</p>}
                <Card
                  name={card.name}
                  number={card.number}
                  valid={card.valid}
                  vendor={card.vendor}
                />
                {i !== 0 &&
                <>
                  <button
                    className="absolute top-1 right-20 px-2 m-1 bg-green-300 opacity-90 rounded invisible group-hover:visible"
                    onClick={() => dispatch(setActiveCard(card.id))}
                  >
                    Gör aktivt
                  </button>
                  <button
                    className="absolute top-1 right-1 px-2 m-1 bg-red-300 opacity-90 rounded invisible group-hover:visible"
                    onClick={() => dispatch(removeCard(card.id))}
                  >
                    Ta bort
                  </button>
                </>
                }
              </li>
              )
        })}
      </ul>
        {cards.length < 4 && <Link to="/new" className="bg-sky-500 p-2 px-5 rounded m-3 text-lg">Lägg till ett nytt kort</Link>}
    </>
  )
}