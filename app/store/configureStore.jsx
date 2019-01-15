import * as redux from 'redux'
import thunk from 'redux-thunk'
import { weatherReducer } from 'reducers';

const configure = (initialState = {}) => {
  /*--redux.combineReducers:
  @Purpose:- Helps to combine multiple reducers
  */
  const reducer = redux.combineReducers({
    weather: weatherReducer
  });

  /*-- redux.createStore:
  @Purpose  Create a Store--*/

  /*--
  redux.applyMiddleware:
  @Purpose:As we are using Redux-thunks applying it as middleware
  */
  const store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk)
  ));

  return store;

};

export default configure;