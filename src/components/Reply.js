import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteReply, editReply } from '../features/comments/commentsSlice';

const Reply = ({ commentId, reply }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(reply.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editReply({ commentId, replyId: reply.id, text }));
    setIsEditing(false);
  };

  return (
    <div className="reply">
      <div>
        <strong>{reply.name}</strong> - <span>{reply.date}</span>
        {isEditing ? (
          <>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleEdit}>Save</button>
          </>
        ) : (
          <>
            <p>{reply.text}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </>
        )}
        <button onClick={() => dispatch(deleteReply({ commentId, replyId: reply.id }))}>Delete</button>
      </div>
    </div>
  );
};

export default Reply;
