import MSKPic from './img/MSK.jpg'
import SPBPic from './img/SPB.jpg'

export const SELECT_CITY = 'SELECT_CITY'

export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'

export const MSK = {
  cityId: 524894,
  img: `url(${MSKPic})`
}

export const SPB = {
  cityId: 536203,
  img: `url(${SPBPic})`
}

export const CITIES = [MSK, SPB]
export const SET_LIST_OF_CITIES = 'SET_LIST_OF_CITIES'
