import { getWeather } from '../API/API'

const addWeather = (list) => {
  return {
    type: 'ADD_WEATHER',
    list
  }
}


const showError = (list) => {
  return {
    type: 'SHOW_ERROR',
    list
  }
}


export const startGetWeather = (city) => {
  return (dispatch, getState) => {
    return getWeather(city).then((res) => {
      dispatch(addWeather(res));
    })
      .catch((err) => {
        dispatch(showError(err));

      })
  }
}
