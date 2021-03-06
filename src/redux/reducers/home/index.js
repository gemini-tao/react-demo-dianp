import { combineReducers } from 'redux'
import isLoading from './isLoading'
import setCity from './setCity'
import getAd from './getAd'
import getRd from './getRb'
import getDiscount from './getDiscount'
import getReduce from './getReduce'
import getLikes from './getLikes'
import getHeadLine from './getHeadLine'

const homeInfo = combineReducers({
  isLoading,
  cityName: setCity,
  adlist: getAd,
  rblist: getRd,
  discountlist: getDiscount,
  reducelist: getReduce,
  likelist: getLikes,
  headline: getHeadLine
})

export default homeInfo
