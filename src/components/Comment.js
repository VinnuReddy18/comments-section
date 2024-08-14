import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editComment, deleteComment, addReply} from '../features/comments/commentsSlice';
import Reply from './Reply';

const Comment = ({ comment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(comment.text);
  const [replyText, setReplyText] = useState('');
  const [replyName, setReplyName] = useState('');
  const [showReply, setShowReply] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editComment({ id: comment.id, text }));
    setIsEditing(false);
  };

  const handleReply = () => {
    if (replyName && replyText) {
      const reply = {
        id: Date.now(),
        name: replyName,
        text: replyText,
        date: new Date().toLocaleString(),
      };
      dispatch(addReply({ id: comment.id, reply }));
      setReplyText('');
      setReplyName('');
      setShowReply(false);
    }
  };

  return (
    <div className="comment">
      <div>
        <strong>{comment.name}</strong> - <span>{comment.date}</span>
        {isEditing ? (
          <>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleEdit}>Save</button>
          </>
        ) : (
          <>
            <p>{comment.text}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </>
        )}
        <button onClick={() => dispatch(deleteComment(comment.id))}>Delete</button>
        <button onClick={() => setShowReply(!showReply)}>Reply</button>
      </div>
      {showReply && (
        <div className="reply-form">
          <input
            type="text"
            placeholder="Name"
            value={replyName}
            onChange={(e) => setReplyName(e.target.value)}
          />
          <textarea
            placeholder="Reply"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <button onClick={handleReply}>Post Reply</button>
        </div>
      )}
      <div className="replies">
        {comment.replies.map((reply) => (
          <Reply key={reply.id} commentId={comment.id} reply={reply} />
        ))}
      </div>
    </div>
  );
};

export default Comment;
