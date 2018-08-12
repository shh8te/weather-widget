import React, { Component } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
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
import { connect } from 'react-redux'

class DayOfTheWeek extends Component {
  render() {
    const { day } = this.props
    
    return (
      <StyledDay>
        <DailyText>{this.getDayOfTheWeek(this.getDailyIndex(day))}</DailyText>
        <DailyIcon>{this.getDailyIcon(this.getDailyIndex(day))}</DailyIcon>
      </StyledDay>
    )
  }

  getDailyIndex = (day) => {
    const { dataByCity } = this.props

    const today = dayjs()
    const firstDay = today.add(1, 'day').date()
    const secondDay = today.add(2, 'day').date()
    const thirdDay = today.add(3, 'day').date()
    
    const dates = dataByCity.list.map((item, i) => {
      return dayjs(item.dt_txt).date()
    })

    const firstDayIndex = dates.indexOf(firstDay) + 4
    const secondDayIndex = dates.indexOf(secondDay) + 4
    const thirdDayIndex = dates.indexOf(thirdDay) + 4

    switch (day) {
      case 0:
        return firstDayIndex
      case 1:
        return secondDayIndex
      case 2:
        return thirdDayIndex
      default:
        return 'wrongIndex'
    }
  }

  getDailyIcon = (index) => {
    const { dataByCity } = this.props

    const actualWeather = this.getWeather()

    const getIconColor = (actualWeather) => {
      switch (actualWeather) {
        case 'CLEAR':
          return 'rgba(214, 45, 32, 0.6)'
        case 'CLOUDS':
          return 'rgba(0, 0, 0, 0.6)'
        case 'RAIN':
          return 'rgba(0, 87, 231, 0.6)'
        default:
          return 'rgba(0, 0, 0, 0.6)'
      }
    }

    const weather = dataByCity.list[index].weather[0].main.toUpperCase()

    switch (weather) {
      case 'CLEAR':
        return <WeatherSunnyIcon color={getIconColor(actualWeather)} size={50} />
      case 'CLOUDS':
        return <WeatherCloudyIcon color={getIconColor(actualWeather)} size={50} />
      case 'RAIN':
        return <WeatherRainyIcon color={getIconColor(actualWeather)} size={50} />
      default:
        return <SignalOffIcon color={getIconColor(actualWeather)} size={50} />
    }
  }

  getWeather = () => {
    const { dataByCity } = this.props

    const weather = dataByCity.list[0].weather[0].main
    return weather.toUpperCase()
  }

  getDayOfTheWeek = (index) => {
    const { dataByCity } = this.props
    
    const dayOfTheWeek = dayjs(dataByCity.list[index].dt_txt).day()

    switch (dayOfTheWeek) {
      case 0:
        return 'SUN'
      case 1:
        return 'MON'
      case 2:
        return 'TUE'
      case 3:
        return 'WED'
      case 4:
        return 'THU'
      case 5:
        return 'FRI'
      case 6:
        return 'SAT'
      default:
        return 'WTF'
    }
  }
}

export default connect(
  (state, ownProps) => ({
    dataByCity: state.dataByCity[ownProps.id]
  })
)(DayOfTheWeek)

const StyledDay = styled.div`
  width: 100%;
  height: 100%;
  border-left: 1px solid #dbe4ee;
`

export const DailyText = styled.h2`  
  font-size: 17px;
  text-align: center;
  color: #8a959b;
  margin-bottom: 10px;
`

export const DailyIcon = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`