export default (state = ["Bananas", "Frozen Pizza", "Flamin' Hot Cheetos", "Arugula"]
  , action) => {
    switch (action.type) {
      case "ADD_INVENTORY":
        return [...state, action.item];
      default:
        return state;
    }
      
  };