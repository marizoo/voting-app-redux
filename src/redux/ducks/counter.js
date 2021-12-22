// create ACTION
const INCREMENT = "increment";
const DECREMENT = "decrement";

// create the function for that action
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

// create STATE
const initialState = {
  count: 0,
};

// The reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
