// A reducer takes in 2 things:
// 1- the action (info about what happen)
// 2- copy of current state

function posts(state = [], action) {
  // console.log(state, action);
  switch(action.type) {
    case 'INCREMENT_LIKE':
      console.log("Increment Likes!");
      const i = action.index;
      // return the updated state
      return [
        ...state.slice(0, i),
        {...state[i], likes: state[i].likes + 10},
        ...state.slice(i+1),
      ]
      default:
        return state;
  }
  return state;
}

export default posts;
