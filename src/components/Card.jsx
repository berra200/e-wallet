import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";


export default function Card({ name, number, valid, vendor }) {
  const user = useSelector(selectUser)

  const formatedNumber = number?.split("").reduce((acc, cur, index) => {
    if (index !== 0 && !(index % 4)) acc += " ";
    return acc + cur;
  }, "");

  const formatedValid = valid?.split("-").reduce((acc, cur, index) => {
    if (index === 0) return cur.slice(-2)
    return cur.slice(-2) + "/" + acc;
  }, "")


  return (
    <div className="w-80 h-48 rounded-lg font-mono">
      <div className="relative w-full h-full rounded-lg">
        <div className="absolute top-0 w-full h-full rounded-lg border border-slate-600 overflow-hidden bg-gradient-to-br from-[#01adef] to-[#0860bf]">
          <p className="absolute top-3 left-3 font-semibold text-lg text-white drop-shadow-sm">{name}</p>
          {vendor !== "" && <img className="absolute right-5 top-4 w-20 h-12 object-contain" src={`/${vendor}.png`} alt="Visa logo" />}
          <div className="absolute right-4 top-14 scale-50">
            <svg width="46" height="56">
              <path
                fill="none"
                stroke="#f9f9f9"
                strokeWidth="6"
                strokeLinecap="round"
                d="m35,3a50,50 0 0,1 0,50M24,8.5a39,39 0 0,1 0,39M13.5,13.55a28.2,28.5
                  0 0,1 0,28.5M3,19a18,17 0 0,1 0,18"
              />
            </svg>
          </div>
          <div className="absolute top-16 left-6 w-11 h-8 rounded-md bg-orange-300"></div>
          <div className="absolute left-5 bottom-7 text-white tracking-wider drop-shadow-sm">
            {user.name?.first} {user.name?.last}
          </div>
          <div className="absolute left-6 bottom-14 font-semibold text-lg text-white tracking-[0.2em] drop-shadow-sm">
            {formatedNumber || "1234 1234 1234 1234"}
          </div>
          <div
            className="absolute right-5 bottom-7 text-white tracking-[0.15em] drop-shadow-sm before:content-['GOOD_THRU'] before:w-12 before:absolute before:right-11 before:text-[10px]">
            { formatedValid || "MM/YY"}
          </div>
        </div>
      </div>
    </div>
  )
}