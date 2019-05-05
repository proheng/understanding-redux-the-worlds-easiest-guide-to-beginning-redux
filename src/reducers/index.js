function reducer(state, action) {
  console.log("reducer is hit with action: ", action, state);
  switch (action.type) {
    case "SET_TECHNOLOGY":
      let newStateObj = {
        /**
         * Never Mutate State Within the Reducers
         * You should not mutate the state received in your Reducer. Instead, you should always return a new copy of the state.
         * Instead of mutating (or changing) the state received from the reducer, I am returning a new object. This object has all the properties of the previous state object. Thanks to the ES6 spread operator, ...state. However, the tech field is updated to what comes in from the action, action.text.
         *
         * more in https://www.youtube.com/watch?v=XR1JJtomx1A
         */
        ...state,
        tech: action.text
      };
      console.log(newStateObj);
      return newStateObj;
    default:
      return state;
  }
}

export default reducer;
