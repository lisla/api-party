import React, { Component } from 'react'
import './WundergroundData.css'

class WundergroundData extends Component {

  state = {
    data: {}
  }
  
  constructor(props) {
    super(props)
    this.fetchUserData(props)
  }

  fetchUserData(props) {
    fetch(`http://api.wunderground.com/api/c1406d72b89bbb3e/conditions/q/${props.match.params.state}/${props.match.params.city}.json`)
      .then(response => response.json())
      .then(details => {
        const data = details.current_observation
        this.setState({ data })  
      })
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = (nextProps.location !== this.props.location)
    if (locationChanged) {
      this.fetchUserData(nextProps)
    }
  }

  render() {
    const data = this.state.data
    const location = data.display_location

    console.log('location: ')
    console.log(location)

    return (
      <div className="wg-data">
        <h3>Weather: {data.weather}</h3>
        <h3>Temp: {data.temp_f} ºF</h3>
        <h3>Feels Like: {data.feelslike_f} ºF</h3>
        <h3>Humidity: {data.relative_humidity}</h3>
      </div>
    )
  }
}
export default WundergroundData