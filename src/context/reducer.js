export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_FAVORIT':
      const newList = [...state.favoriList];
      newList.push(action.payLoad.selectedrestaurant);
      state.favoriList = newList;
      return {...state};

    default:
      return state;
  }
}
