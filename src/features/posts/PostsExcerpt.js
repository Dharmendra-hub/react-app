import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import { Link } from 'react-router-dom';
import React from 'react';

let PostsExcerpt = ({ post }) => {
    return (
        <article>
            <h2>{post.title}</h2>
            <p className='excerpt'>{post.body.substring(0, 100)}</p>
            <div className='postCredit'>
                <Link to={`post/${post.id}`}>View Post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
                <ReactionButtons post={post} />
            </div>
        </article>
    )
}

//This allows to not to render if the props is not changed
//This is not a Normalization ay although
//This meoization is high order component used in performance optimization
PostsExcerpt = React.memo(PostsExcerpt);

export default PostsExcerpt;
