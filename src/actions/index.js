import {
  SELECT_CITY,
  REQUEST_DATA,
  RECEIVE_DATA,
  SET_LIST_OF_CITIES
} from '../constants'
import axios from 'axios'

export const setListOfCities = () => {
  return {
    type: SET_LIST_OF_CITIES
  }
}

export const selectCity = (id) => {
  return {
    type: SELECT_CITY,
    id
  }
}

export const requestData = () => {
  return {
    type: REQUEST_DATA
  }
}

export const receiveData = (res) => {
  const data = res.reduce((result, item) => ({
    ...result,
    [item.data.city.id]: item.data
  }), {})

  return {
    type: RECEIVE_DATA,
    data
  }
}

export const getData = () => {
  return async dispatch => {
    try {
      dispatch(requestData())

      const res = await Promise.all([
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=524894&APPID=6a7f0421f6db587c51706ca707dbac2b`),
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=536203&APPID=6a7f0421f6db587c51706ca707dbac2b`)
      ])

      dispatch(receiveData(res))
    } catch (e) {
      throw e
    }
  }
}