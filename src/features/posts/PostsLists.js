import { useSelector } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError } from './postsSlice';
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
    //Way 1 when we get state.posts
    //const posts = useSelector(state => state.posts);

    //Way 2 with benefit of in case the state sturucture changes it will always give the posts only, as this is aleady processed in postsSlice file
    const posts = useSelector(selectAllPosts);
    const postsStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    let content;
    if (postsStatus === 'loading') {
        content = <p>Loading...</p>;
    }
    else if (postsStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
        content = orderedPosts.map(post => <PostsExcerpt dataId={post.id} key={post.id} post={post} />);
    }
    else if (postsStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <section>
            {content}
        </section>
    )
}

export default PostsList;
