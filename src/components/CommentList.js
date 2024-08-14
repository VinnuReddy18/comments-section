import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addComment, sortCommentsByDate } from '../features/comments/commentsSlice';
import Comment from './Comment';

const CommentList = () => {
  const comments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleAddComment = () => {
    if (name && text) {
      const newComment = {
        id: Date.now(),
        name,
        text,
        date: new Date().toLocaleString(),
        replies: [],
      };
      dispatch(addComment(newComment));
      setName('');
      setText('');
    }
  };

  return (
    <div>
      <div className="comment-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddComment}>Post Comment</button>
      </div>
      <button onClick={() => dispatch(sortCommentsByDate())}>Sort by Date</button>
      <div className="comments">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
