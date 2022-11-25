import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: 'Learning Redux toolkit', content: 'I am learning redux toolkit' },
    { id: 2, title: 'Redux Toolkit advanced', content: 'Redux setup and slices' },
    { id: 3, title: 'React query', content: 'React query for data processing' }
];

const postSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {}
});

export default postSlice.reducer;
