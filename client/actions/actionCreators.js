// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKE',
    index
  }
}

// add comment
export function addComment(postId, author, comment) {
  console.log("Dispatching add comment");
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment(postId, i) {
  return {
    type: 'DELETE_COMMENT',
    postId,
    i
  }
}