export const fetchComments = () => {
    return JSON.parse(localStorage.getItem('comments')) || [];
  };
  
  export const saveComments = (comments) => {
    localStorage.setItem('comments', JSON.stringify(comments));
  };
  
  export const addCommentAPI = (comment) => {
    const comments = fetchComments();
    comments.push(comment);
    saveComments(comments);
  };
  
  export const editCommentAPI = (id, text) => {
    const comments = fetchComments();
    const commentIndex = comments.findIndex(comment => comment.id === id);
    if (commentIndex > -1) {
      comments[commentIndex].text = text;
      saveComments(comments);
    }
  };
  
  export const deleteCommentAPI = (id) => {
    let comments = fetchComments();
    comments = comments.filter(comment => comment.id !== id);
    saveComments(comments);
  };
  
  export const addReplyAPI = (commentId, reply) => {
    const comments = fetchComments();
    const comment = comments.find(comment => comment.id === commentId);
    if (comment) {
      comment.replies.push(reply);
      saveComments(comments);
    }
  };
  
  export const editReplyAPI = (commentId, replyId, text) => {
    const comments = fetchComments();
    const comment = comments.find(comment => comment.id === commentId);
    const reply = comment.replies.find(reply => reply.id === replyId);
    if (reply) {
      reply.text = text;
      saveComments(comments);
    }
  };
  
  export const deleteReplyAPI = (commentId, replyId) => {
    const comments = fetchComments();
    const comment = comments.find(comment => comment.id === commentId);
    comment.replies = comment.replies.filter(reply => reply.id !== replyId);
    saveComments(comments);
  };
  