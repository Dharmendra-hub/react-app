import React from 'react'
import { useSelector } from "react-redux";

import { selectAllPosts } from './postsSlice';

const PostsList = () => {
    //Way 1 when we get state.posts
    //const posts = useSelector(state => state.posts);

    //Way 2 with benefit of in case the state sturucture changes it will always give the posts only, as this is aleady processed in postsSlice file
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.postData.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
        </article>
    ));

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}

export default PostsList;
