import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns';

const initialState = [
    {
        id: 1,
        title: 'Learning Redux toolkit',
        content: 'I am learning redux toolkit',
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: 2,
        title: 'Redux Toolkit advanced',
        content: 'Redux setup and slices',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: 3,
        title: 'React query',
        content: 'React query for data processing',
        date: sub(new Date(), { minutes: 3 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    }
];

const postSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                //We usually dont mutate state directly like here state.push is wrong way although
                //Here its a feature of react toolkit that you can diectly push the data in the state because under the hood it uses immer.js for state manipulation
                //console.log(state);
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload;
            const existingPost = state.find(post => post.id === postId);
            if (existingPost) {
                //immer js will handle this direct update of the state
                existingPost.reactions[reaction]++
            }
        }
    }
});

//name in createSlice
export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postSlice.actions;

export default postSlice.reducer;
