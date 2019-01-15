import React, { Component } from 'react'
import Redux, { connect } from 'react-redux'
import { startGetWeather } from '../actions/actions'


/*--@Pupose Search-Box Component
*/
class SearchBox extends Component {

  /*--@Function handleSearch 
  @Purpose Handles the search functionality when the city is submitted
  */
  handleSearch(e) {
    const city = this.refs.city.value;
    if (city) {
      this.props.dispatch(startGetWeather(city))
      this.refs.city.value = '';
    } else {
      this.refs.city.focus();
    }
    e.preventDefault()
  }


  /*--@Purpose Render method of SearchBox
  */
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-4 col-sm-12">
          <h2 className="brand">Weather App</h2>
        </div>
        <div className="search col-lg-8 col-sm-12">
          <form onSubmit={this.handleSearch.bind(this)}>
            <div className='input-group'>
              <input ref='city' type='text' className='form-control input-box' placeholder="Enter City to Get Weather of 5 days" />
              <button type='submit' className='btn btn-light styleButton col-sm-12 col-md-2'>Confirm</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    )
  }
}



export default connect()(SearchBox)
