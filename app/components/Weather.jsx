import React, { Component } from 'react'


/*--@Component Weather Component
Each day data
*/

class Weather extends Component {

  render() {
    const { weather } = this.props;
    const renderSingleDayWeather = weather.arr.map((item, index) => {
      return (
        <ul className="list-group todayWeatherList" key={item.dt}>
          <li className="list-group-item">{item.main.temp} ℃ At {item.dt_txt.slice(10)} <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} /></li>
        </ul>
      )
    });
    return (
      <div className="col-lg-12">
        <div className="card-header todayLabel">
          <h6 className="brand">{weather.day}</h6>
        </div>
        <div className="card-body">
          {renderSingleDayWeather}
        </div>
      </div>
    )
  }
}

export default Weather
