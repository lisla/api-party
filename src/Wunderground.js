import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Wunderground.css'
import WundergroundData from './WundergroundData'

class Wunderground extends Component{

  state = {
    state: '',
    city: '', 
  }

  handleChange = (ev) => {
    const s = {...this.state}
    s[ev.currentTarget.name] = ev.currentTarget.value
    this.setState({ 
      state: s.state, 
      city: s.city 
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/wg/${this.state.state}/${this.state.city}`)
  }

  render(){
    return(
      <div className="wg">
        <img className="wg-logo" src="https://icons.wxug.com/logos/PNG/wundergroundLogo_4c_rev.png" alt="Wunderground Logo"/>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              placeholder="City"
              name="city"
              type="text"
              value={this.state.city}
              onChange={this.handleChange}
            />
            <input
              placeholder="State"
              name="state"
              type="text"
              value={this.state.state}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Enter the city and state</button>
          </div>
        </form>
        <Route exact path='/wg' render={() => <h3>Enter some text</h3>} />
        <Route path='/wg/:state/:city' component={WundergroundData} />
      </div>
    )
  }
}

export default Wunderground