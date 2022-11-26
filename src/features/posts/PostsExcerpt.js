import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostsExcerpt = ({ post, dataId }) => {
    return (
        <article data-id={dataId}>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}</p>
            <div className='postCredit'>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
                <ReactionButtons post={post} />
            </div>
        </article>
    )
}

export default PostsExcerpt;
