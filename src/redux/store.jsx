import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import cardsReducer from "../features/cards/cardsSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        cards: cardsReducer
    }
})