export default (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];
    case "REMOVE_ITEM":
        const newState = [...state]
        newState.splice(action.index, 1)
        console.log(action.index)
        return newState
    
    default:
      return state;
  }
    
};
