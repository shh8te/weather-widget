import React, { Component } from 'react'
import DayOfTheWeek from './DayOfTheWeek'
import styled from 'styled-components'

class Footer extends Component {
  render() {
    const { id } = this.props

    const days = Array.from({ length: 3 }, (_, i) => i)
    
    return (
      <StyledFooter>
        {days.map(item => <DayOfTheWeek id={id} day={item} key={item} />)}
      </StyledFooter>
    )
  }
}

export default Footer

const StyledFooter = styled.div`
  height: 40%;
  background-color: white;
  display: grid;
  grid-template: 100% / 1fr 1fr 1fr;
`