import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import './App.css'
import Github from './Github'
import LastFM from './LastFM'
import Wunderground from './Wunderground'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-headings">
            <h3>Ain't no party like an</h3>
            <h1>API Party</h1>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to='/github'>Github</NavLink>
              <NavLink to='/lastfm'>Last FM</NavLink>
              <NavLink to='/wg'>Wunderground</NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path='/github' component={Github} />
          <Route path='/lastfm' component={LastFM} />
          <Route path='/wg' component={Wunderground} />
          <Route render={() => <p>To get started, click one of the links above</p>} />
        </Switch>
      </div>
    );
  }
}

export default App
