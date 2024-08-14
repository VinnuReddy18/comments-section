import { createSlice } from '@reduxjs/toolkit';
import {
  fetchComments,
  addCommentAPI,
  editCommentAPI,
  deleteCommentAPI,
  addReplyAPI,
  editReplyAPI,
  deleteReplyAPI,
} from './commentsAPI';

const initialState = {
  comments: fetchComments(),
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action) => {
      addCommentAPI(action.payload);
      state.comments = fetchComments();
    },
    editComment: (state, action) => {
      editCommentAPI(action.payload.id, action.payload.text);
      state.comments = fetchComments();
    },
    deleteComment: (state, action) => {
      deleteCommentAPI(action.payload);
      state.comments = fetchComments();
    },
    addReply: (state, action) => {
      addReplyAPI(action.payload.id, action.payload.reply);
      state.comments = fetchComments();
    },
    editReply: (state, action) => {
      editReplyAPI(action.payload.commentId, action.payload.replyId, action.payload.text);
      state.comments = fetchComments();
    },
    deleteReply: (state, action) => {
      deleteReplyAPI(action.payload.commentId, action.payload.replyId);
      state.comments = fetchComments();
    },
    sortCommentsByDate: (state) => {
      state.comments.sort((a, b) => new Date(b.date) - new Date(a.date));
    },
  },
});

export const {
  addComment,
  editComment,
  deleteComment,
  addReply,
  editReply,
  deleteReply,
  sortCommentsByDate,
} = commentsSlice.actions;

export default commentsSlice.reducer;
