import React, { Component } from 'react'
import './LastFMDetails.css'

class LastFMDetails extends Component {

  state = {
    tracks: []
  }
  
  constructor(props) {
    super(props)
    this.fetchUserData(props)
  }

  fetchUserData(props) {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${props.match.params.track}&api_key=8703a0d429648c22eb5a6828231f6b76&format=json`)
      .then(response => response.json())
      .then((details) => {
        const tracks = details.results.trackmatches.track.slice(0, 10)
        this.setState({ tracks })
      })
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = (nextProps.location !== this.props.location)
    if (locationChanged) {
      this.fetchUserData(nextProps)
    }
  }

  render() {
    return (
      <div className="lastfm-details">
        <ul className="tracks">
        {
          this.state.tracks.map((track, i) => {
            return(
              <li key={i}>
                <img src={track.image[2]['#text']} alt="user"/>
                <h3>Track Name: <a href={track.url}>{track.name}</a></h3>
                <h3>Artist: {track.artist}</h3>
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}
export default LastFMDetails