import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

import { Link } from 'react-router-dom';

const PostsExcerpt = ({ post, dataId }) => {
    return (
        <article data-id={dataId}>
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

export default PostsExcerpt;
