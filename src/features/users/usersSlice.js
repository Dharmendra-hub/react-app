import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 0, name: 'John Wick' },
    { id: 1, name: 'Baba Yaga' },
    { id: 2, name: 'John Doe' }
];

const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {

    }
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;