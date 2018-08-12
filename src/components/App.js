import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { connect } from 'react-redux'
import { getData, setListOfCities } from '../actions'
import CityCard from './CityCard'

class App extends Component {
  render() {
    const { selectedCity, cities } = this.props

    return (
      <div>
        {cities.map(item => {
          return <CityCard key={item.cityId} id={item.cityId} />
        })}
      </div>
    )
  }

  componentDidMount() {
    const { getData, setListOfCities } = this.props
    setListOfCities()
    getData()
  }
}

export default connect(
  state => ({
    cities: state.cities
  }),
  { getData, setListOfCities }
)(App)
