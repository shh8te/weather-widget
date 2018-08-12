import {
  SET_LIST_OF_CITIES,
  REQUEST_DATA,
  RECEIVE_DATA,
  SELECT_CITY,
  CITIES
} from '../constants'

const initialState = {
  cities: [],
  dataByCity: {},
  isLoading: false,
  selectedCity: CITIES[0].cityId
}

const reducer = (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case SET_LIST_OF_CITIES:
      return Object.assign({}, state, {
        cities: CITIES
      })
    case SELECT_CITY:
      return Object.assign({}, state, {
        selectedCity: action.id
      })
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isLoading: true
      })
    case RECEIVE_DATA:
      return Object.assign({}, state, {
        dataByCity: action.data,
        isLoading: false
      })
    default:
      return state
  }
}

export default reducer