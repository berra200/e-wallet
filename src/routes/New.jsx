import { useNavigate } from "react-router-dom"
import AddCardForm from "../features/cards/addCardForm"

const New = () => {
    const navigate = useNavigate()

    return (
        <AddCardForm navigate={navigate} />
    )
}

export default New