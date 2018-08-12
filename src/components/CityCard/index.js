import React, { Component, Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import styled, { keyframes } from 'styled-components'
import { connect } from 'react-redux'
import { selectCity } from '../../actions'

class CityCard extends Component {
  render() {
    const { cities, isLoading, selectCity, selectedCity, id } = this.props
    return isLoading ? <h1>Loading...</h1> : (
      <StyledCityCard onClick={() => selectCity(id)} selectedCity={selectedCity} id={id} cities={cities} >
        <Header id={id} />
        <Footer id={id} />
      </StyledCityCard>
    )
  }
}

export default connect(
  (state) => ({
    selectedCity: state.selectedCity,
    isLoading: state.isLoading,
    cities: state.cities
  }),
  { selectCity }
)(CityCard)

const slideUp = keyframes`
  from {
    transform:
    translate(100px)
    scale(0.8, 0.8);
  }

  to {
    transform:
    translate(0px)
    scale(1, 1);
  }
  `

const slideDown = keyframes`
  to {
    transform:
    translate(100px)
    scale(0.8, 0.8);
  }
  `

const StyledCityCard = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  position: absolute;
  cursor: pointer;
  z-index: ${props => {
    if (props.id === props.cities[0].cityId) {
      switch (props.selectedCity) {
        case props.cities[0].cityId:
          return 2
        case props.cities[1].cityId:
          return 1
        default:
          return 2
      }
    } else if (props.id === props.cities[1].cityId) {
      switch (props.selectedCity) {
        case props.cities[0].cityId:
          return 1
        case props.cities[1].cityId:
          return 2
        default:
          return 1
      }
    }
  }};
  animation: ${props => {
    if (props.id === props.cities[0].cityId) {
      switch (props.selectedCity) {
        case props.cities[1].cityId:
          return `${slideDown} 0.3s linear forwards`
        case props.cities[0].cityId:
          return `${slideUp} 0.3s linear forwards`
        default:
          return ''
      }
    } else if (props.id === props.cities[1].cityId) {
      switch (props.selectedCity) {
        case props.cities[1].cityId:
          return `${slideUp} 0.3s linear forwards`
        case props.cities[0].cityId:
          return `${slideDown} 0.3s linear forwards`
        default:
          return ''
      }
    }
  }};
`