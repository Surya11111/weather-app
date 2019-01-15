import React, { Component } from 'react'
import SearchBox from './SearchBox'
import PanelList from './PanelList'


/*--@Pupose:-App Component 
Will be rendered to Root element 
*/

class App extends Component {
  
  render() {
    
    return (
      <React.Fragment>
        <div className="row topbar">
          <SearchBox />
        </div>
        <div className='row'>
          <PanelList />
        </div>
      </React.Fragment>
    )
  }
}

export default App
