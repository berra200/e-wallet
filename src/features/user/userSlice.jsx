import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
    try {
        const res = await axios.get("https://randomuser.me/api/");
        return res.data.results[0]
    } catch (err) {
        return err.message
    }
})

const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const selectUser = (state => state.user)

export default userSlice.reducer;
