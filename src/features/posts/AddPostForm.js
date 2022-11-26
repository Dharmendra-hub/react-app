import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";


const AddPostForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const [addReqestStatus, setAddRequestStatus] = useState('idle');

    const users = useSelector(selectAllUsers);

    const onTitleChange = (e) => setTitle(e.target.value);
    const onContentChange = (e) => setContent(e.target.value);
    const onAuthorChange = (e) => setUserId(e.target.value);

    //const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
    const canSave = [title, content, userId].every(Boolean) && addReqestStatus === 'idle';


    const onSavePostClicked = (event) => {
        event.preventDefault();

        if (canSave) {
            try {
                setAddRequestStatus('pending')
                dispatch(addNewPost({ title, body: content, userId })).unwrap();

                setTitle('')
                setContent('')
                setUserId()
            }
            catch (error) {
                console.error('Failed to save the post', error);
            }
            finally {
                setAddRequestStatus('idle');
            }
        }
    }

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    return (
        <section>
            <h2>Add a new Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="posttitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChange}
                />

                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChange}>
                    <option value="">:: Select Author ::</option>
                    {userOptions}
                </select>

                <label htmlFor="postContent">Post Content</label>
                <textarea
                    type="text"
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChange}
                />

                <button
                    type="submit"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Save Post</button>
            </form>

        </section>
    );
}

export default AddPostForm;