import {createSlice, nanoid} from '@reduxjs/toolkit'


const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        cards: [
            {
            id: nanoid(),
            name: "Mitt kort!",
            vendor: "mastercard",
            number: "1234123412341234",
            ccv: "222",
            valid: "2024-12",
        }
    ]
    },
    reducers: {
        addNewCard: (state, action) => {
            state.cards.unshift({...action.payload, id: nanoid()})
        },
        setActiveCard: (state, action) => {
            let cardToMove;
            state.cards.map((card, i) => {
                if(card.id === action.payload) {
                    cardToMove = card
                    state.cards.splice(i, 1)
                }
            })
            state.cards.unshift(cardToMove)
        },
        removeCard: (state, action) => {
            state.cards.map((card, i) => {
                if(card.id === action.payload) {
                    state.cards.splice(i, 1)
                }
            })
        }
    },
})

export const selectAllCards = (state => state.cards.cards)

export const { addNewCard, setActiveCard, removeCard } = cardsSlice.actions

export default cardsSlice.reducer;
