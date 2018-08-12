import React, { Component } from 'react'
import ColorOverlay from './ColorOverlay'
import styled from 'styled-components'
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    const { id, cities } = this.props
    return (
      <StyledHeader id={id} cities={cities} >
        <ColorOverlay id={id} />
      </StyledHeader>
    )
  }
}

export default connect(
  (state) => ({
    cities: state.cities
  })
)(Header)

const StyledHeader = styled.div`
  background-image: ${props => {
    switch (props.id) {
      case props.cities[0].cityId:
        return props.cities[0].img
      case props.cities[1].cityId:
        return props.cities[1].img
    }
  }};
  background-size: cover;
  width: 100%;
  height: 60%;
  position: relative;
`