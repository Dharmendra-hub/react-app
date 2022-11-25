import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    postData: [
        { id: 1, title: 'Learning Redux toolkit', content: 'I am learning redux toolkit' },
        { id: 2, title: 'Redux Toolkit advanced', content: 'Redux setup and slices' },
        { id: 3, title: 'React query', content: 'React query for data processing' }
    ],
    errorMessage: null
};

const postSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        postAdded(state, action) {
            //We usually dont mutate state directly like here state.push is wrong way although
            //Here its a feature of react toolkit that you can diectly push the data in the state because under the hood it uses immer.js for state manipulation
            //console.log(state);
            state.postData.push(action.payload);
        }
    }
});

//name in createSlice
export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;
