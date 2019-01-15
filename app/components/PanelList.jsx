import React, { Component } from 'react'
import { connect } from 'react-redux'
import WeatherforecastReport from './WeatherforecastReport'

/*--Pupose PanelList Component
*/

class PanelList extends Component {

  /*--Pupose PanelList Component render Menthod 
  Used to render List of Panel that display 5 days Weather reports
  */
  render() {
    
    const { weather } = this.props;
    console.log(weather)
    const List = weather.map((item) => {
      return <WeatherforecastReport key={item.city.id} forecast={item} />
    });
    const noDataMsg =<div className='card-header todayLabel col-lg-12'><h6>Please Enter Proper City in Search Bar to Check Weather report</h6></div>;
    return (
      <React.Fragment>
        {(weather.length!=0)?List:noDataMsg}
      </React.Fragment>
    )
  }
}



export default connect(({ weather }) => {
  return {
    weather
  }
})(PanelList)
