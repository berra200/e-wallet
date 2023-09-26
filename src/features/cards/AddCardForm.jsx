import Card from "../../components/card"

import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../user/userSlice"
import { addNewCard } from "./cardsSlice"
import { useState } from "react"

export default function AddCardForm({ navigate }) {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [valid, setValid] = useState("")
    const [vendor, setVendor] = useState("")
    const [ccv, setCcv] = useState("")

    const handleAddCard = (e) => {
        e.preventDefault()
        dispatch(addNewCard({number, valid, vendor, ccv}))
        navigate("/")
    }

    return (
        <>
            <Card name={name} firstname={user.name?.first} lastname={user.name?.last} number={number} valid={valid} vendor={vendor} />
            <form className="flex flex-col" onSubmit={(e) => handleAddCard(e)}>
                <label htmlFor="cardName">Kortnamn:</label>
                <input
                    className="border border-black rounded p-1 my-1"
                    id="cardName"
                    type="text"
                    maxLength="20"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Mitt bankkort"
                />
                <label htmlFor="cardNumber">Kortnummer*:</label>
                <input
                    className="border border-black rounded p-1 my-1"
                    id="cardNumber"
                    type="text"
                    pattern="\d*"
                    maxLength="16"
                    minLength="16"
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    placeholder="1234 1234 1234 1234"
                    required
                />
                <div className="flex gap-5">
                    <div className="flex flex-col">
                    <label htmlFor="cardNumber">Giltig till*:</label>
                    <input
                        className="border border-black rounded p-1 my-1"
                        id="valid"
                        type="month"
                        onChange={(e) => setValid(e.target.value)}
                        value={valid}
                        required
                    />
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="ccv">CCV*:</label>
                    <input
                    className="border border-black rounded p-1 my-1 w-9"
                    id="ccv"
                    type="text"
                    pattern="\d*"
                    maxLength="3"
                    minLength="3"
                    onChange={(e) => setCcv(e.target.value)}
                    value={ccv}
                    required
                />
                    </div>
                </div>
                <label htmlFor="cardVendor">Utgivare*:</label>
                <select
                    name="cardVendor"
                    id="cardVendor"
                    className="border border-black rounded p-1 my-1"
                    onChange={(e) => setVendor(e.target.value)}
                    defaultValue=""
                    required
                >
                    <option disabled hidden value="">Välj en kortutgivare</option>
                    <option value="amex">American Express</option>
                    <option value="mastercard">Mastercard</option>
                    <option value="visa">Visa</option>
                </select>
                <div className="w-full mt-5 flex gap-4">
                <button
                    type="button"
                    className="border border-black bg-red-400 rounded py-1 w-full"
                    onClick={() => navigate("/")}
                >Avbryt</button>
                <button
                    type="submit"
                    className="border border-black bg-blue-400 rounded py-1 w-full"
                >Lägg till</button>
                </div>
            </form>
        </>
    )
}