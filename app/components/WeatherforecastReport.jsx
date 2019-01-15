import React, { Component } from 'react'
import CurrentWeather from './CurrentWeather'
import WeatherDataList from './WeatherDataList'


/*--Purpose WeatherforecastReport
returns presentDayWeather and list of weather data
*/

class WeatherforecastReport extends Component {


  constructor(props) {
    super(props);
  }



  render() {

    const { forecast } = this.props;

    return (
      <React.Fragment>
        <div className="col-lg-12">
          <CurrentWeather forecast={forecast} />
        </div>
        <div className="col-lg-12">
          <WeatherDataList forecast={forecast} />
        </div>
      </React.Fragment>
    )
  }

}



export default WeatherforecastReport
