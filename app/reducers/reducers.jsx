export const initialState = [];

/*--@function weatherReducer
This will be the reducer for our redux and will be passed in to store which will be sigle point of truth
Actions:-ADD_WEATHER SHOW_ERROR
*/
export const weatherReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_WEATHER':
      return [...initialState, action.list];
    case 'SHOW_ERROR':
      return [...initialState]
    default:

      return state;
  }

}

