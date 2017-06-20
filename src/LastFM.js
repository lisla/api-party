import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './LastFM.css'
import LastFMDetails from './LastFMDetails'

class LastFM extends Component{

  state = {
    music: '',
  }

  handleChange = (ev) => {
    const music = ev.currentTarget.value
    this.setState({ music })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/lastfm/${this.state.music}`)
  }

  render(){
    return(
      <div className="lastfm">
        <img className="lastfm-logo" src="http://shaneatkins.co.uk/wp-content/uploads/2012/07/lastfm.jpg" alt="LastFM Logo"/>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              type="text"
              value={this.state.music}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Look up a track</button>
          </div>
        </form>
        <Route exact path='/lastfm' render={() => <h3>Please enter a track name</h3>} />
        <Route path='/lastfm/:track' component={LastFMDetails} />
      </div>
    )
  }
}

export default LastFM