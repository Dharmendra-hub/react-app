import React from 'react'
import { useSelector } from "react-redux";
import { selectAllPosts } from './postsSlice';

import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostsList = () => {
    //Way 1 when we get state.posts
    //const posts = useSelector(state => state.posts);

    //Way 2 with benefit of in case the state sturucture changes it will always give the posts only, as this is aleady processed in postsSlice file
    const posts = useSelector(selectAllPosts);

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className='postCredit'>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
                <ReactionButtons post={post} />
            </p>
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
