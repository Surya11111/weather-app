import React, { Component } from 'react'

/*--@Component CurrentWeather
Displays Current Day Weather 
--*/

class CurrentWeather extends Component {
  render() {
    const { forecast } = this.props;
    const current = forecast.list[0];
    return (
      <React.Fragment>
        <div className="card-header todayLabel col-lg-12"><h6 className="brand">Today in {forecast.city.name}</h6></div>
        <div className="card-body col-sm-12 col-lg-4 offset-lg-4">
          <ul className="list-group todayWeatherList">
            <li className="list-group-item">Temperature: {current.main.temp} ℃</li>
            <li className="list-group-item">Description: {current.weather[0].description}</li>
            <li className="list-group-item">Wind speed: {current.wind.speed}</li>
            <li className="list-group-item">Pressure: {current.main.pressure}</li>
            <li className="list-group-item"><img alt={current.weather[0].description} src={`http://openweathermap.org/img/w/${current.weather[0].icon}.png`} /></li>
          </ul>
        </div>
      </React.Fragment>

    )
  }
}

export default CurrentWeather


