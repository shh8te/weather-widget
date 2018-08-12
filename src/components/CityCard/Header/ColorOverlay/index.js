import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
  WeatherCloudyIcon,
  WeatherWindyIcon,
  WeatherHailIcon,
  WeatherFogIcon,
  WeatherHurricaneIcon,
  WeatherLightningIcon,
  WeatherLightningRainyIcon,
  WeatherRainyIcon,
  WeatherSnowyIcon,
  WeatherSunnyIcon,
  WeatherSnowyRainyIcon,
  WeatherPartlycloudyIcon,
  SignalCellularNoSimIcon,
  SignalOffIcon
} from 'mdi-react'

class ColorOverlay extends Component {
  render() {
    return (
      <StyledColorOverlay weather={this.getWeather()} >
        <CityName>{this.getCityName()}</CityName>
        <MainIcon>{this.getIcon(this.getWeather())}</MainIcon>
        <Weather>{this.getWeather()}</Weather>
        <Wind>
          <WeatherWindyIcon color='#fff' size={15} />
          {this.getWind()}
        </Wind>
        <Temp>{this.getTemp()}</Temp>
      </StyledColorOverlay>
    )
  }

  getCityName = () => {
    const { dataByCity } = this.props
    return dataByCity.city.name
  }

  getTemp = () => {
    const { dataByCity } = this.props
    const tempKelvin = dataByCity.list[0].main.temp
    const tempCelsius = `${Math.round(tempKelvin - 273.15)}°`
    return tempCelsius
  }

  getWeather = () => {
    const { dataByCity } = this.props
    const weather = dataByCity.list[0].weather[0].main
    return weather.toUpperCase()
  }

  getWind = () => {
    const { dataByCity } = this.props
    const wind = dataByCity.list[0].wind.speed
    return `${Math.round(wind)} mps`
  }

  getIcon = (weather) => {
    switch (weather) {
      case 'CLEAR':
        return <WeatherSunnyIcon color='#fff' size={100} />
      case 'CLOUDS':
        return <WeatherCloudyIcon color='#fff' size={100} />
      case 'RAIN':
        return <WeatherRainyIcon color='#fff' size={100} />
      default:
        return <SignalOffIcon color='#fff' size={100} />
    }
  }
}

export default connect(
  (state, ownProps) => ({
    dataByCity: state.dataByCity[ownProps.id],
    selectedCity: state.selectedCity,
    cities: state.cities
  })
)(ColorOverlay)

const StyledColorOverlay = styled.div`
  padding: 5%;
  display: grid;
  grid-template: 30% 1fr 1fr 30% / 1fr 1fr;
  background-color: ${props => {
    switch (props.weather) {
      case 'CLEAR':
        return 'rgba(214, 45, 32, 0.6)'
      case 'CLOUDS':
        return 'rgba(0, 0, 0, 0.6)'
      case 'RAIN':
        return 'rgba(0, 87, 231, 0.6)'
      default:
        return 'rgba(0, 0, 0, 0.6)'
    }
  }};
  height: 100%;
  box-sizing: border-box;
`

export const CityName = styled.h1`
  grid-area: 1/1/2/3
  margin: 0;
  font-size: 23px;
  //background-color: green;
`

export const MainIcon = styled.div`
  grid-area: 2/2/5/3;
  text-align: center;
  width: 100%;
  height: 100%;
  //background-color: red;
`

export const Weather = styled.span`
  grid-area: 2/1/3/2;
  //background-color: orange;
`

export const Wind = styled.span`
  grid-area: 3/1/4/2;
  //background-color: yellow;      
`

export const Temp = styled.div`
  font-size: 30px;
  grid-area: 4/1/5/1;
  //background-color: pink;
`