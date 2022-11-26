import React from 'react';

import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers);

    //Need to check
    const author = users.find(user => user.id === Number(userId));

    return <span>by {author ? author.name : 'Unknown Author'}</span>;
}

export default PostAuthor;
