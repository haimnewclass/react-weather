import {reducerWeather} from './weather_reducer'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    weather:reducerWeather
})

export default allReducers;