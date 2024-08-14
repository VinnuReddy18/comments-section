import React from 'react';
import { useDispatch } from 'react-redux';
import { sortCommentsByDate } from '../features/comments/commentsSlice';

const SortButton = () => {
  const dispatch = useDispatch();

  const handleSort = () => {
    dispatch(sortCommentsByDate());
  };

  return (
    <button onClick={handleSort}>
      Sort by Date
    </button>
  );
};

export default SortButton;
