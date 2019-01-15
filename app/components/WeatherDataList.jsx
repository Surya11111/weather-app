import React, { Component } from 'react'
import Weather from './Weather'

/*---@WeatherDataList Component
@Purpose filter data and format the raw data into pattern
*/

class WeatherDataList extends Component {


  render() {
    const { forecast } = this.props;
    let list = forecast.list;


    list = list.filter((item) => {
      if (item.dt_txt.indexOf('09:00:00') != -1 || item.dt_txt.indexOf('15:00:00') != -1 || item.dt_txt.indexOf('21:00:00') != -1) {
        return item
      }
    });

    let arr = [];
    let res = {};
    let resArr = [];
    let limit = 3;
    list.forEach((item, index) => {
      if (index < limit) {
        arr.push(item)
        if (arr.length === 3) {
          res = {
            day: new Date(arr[0].dt_txt.slice(0, 10)).toDateString(),
            arr
          };
          arr = [];
          limit = limit + 3;
          resArr.push(res)
        }
      }
    });

    const renderWeather = resArr.map((item, index) => {
      return <Weather key={item.day} weather={item} />
    });


    return (
      <React.Fragment>
        <div className="col-lg-12 card-header todayLabel">
          <h6>5 days Weather Forecast</h6>
        </div>
        <React.Fragment>
          {renderWeather}
        </React.Fragment>
      </React.Fragment>
    )
  }

}

export default WeatherDataList;
