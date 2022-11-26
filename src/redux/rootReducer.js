
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';

const rootReducer = {
    posts: postsReducer,
    users: usersReducer
}
export default rootReducer; 