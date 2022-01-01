import { orderBy } from 'lodash'
import { Moment } from 'moment-timezone'
import { UnitInMilliseconds } from '../../declarations/enum/moment'
import { momentFormatter, _moment } from './convert'
import { generateTimestamp } from './generate'

/**
 * Check if given time is before the fund's cut off time inputted
 *
 * @param {string | number} givenTime
 * @param {string} cutOff hh:mmA
 * @return {*}  {boolean}
 */
export const beforeCutOff = (givenTime: string | number, cutOff: string): boolean => {
  const givenMoment = _moment(givenTime)

  // set cutOff time
  const dateToday = momentFormatter(generateTimestamp(), 'DD/MM/YYYY') // ensures cutOffTime is today's date
  const cutOffMoment = _moment(`${dateToday} ${cutOff}`, 'DD/MM/YYYY hh:mmA')

  // compare
  return givenMoment.isSameOrBefore(cutOffMoment)
}
/**
 * Works like includes but to compare moment objects
 *
 * @param {Moment[]} arr
 * @param {Moment} value
 * @return {*}  {boolean}
 */
export const momentIncludes = (arr: Moment[], value: Moment): boolean => {
  for (const b of arr) if (b.isSame(value)) return true
  return false
}
/**
 * Add days/hour/minute to a given timestamp, defaults to days
 *
 * @param {(string | number)} TIMESTAMP
 * @param {string | number} daysToAdd
 * @param {boolean} [isEndOfDay=false]
 * @param {DefaultUnitList} [unit]
 * @return {*}  {(string | number)}
 */
export const addDays = (
  TIMESTAMP: string | number,
  daysToAdd: string | number,
  isEndOfDay: boolean = false,
  unit?: DefaultUnitList
): string | number => {
  // validating type
  if (typeof TIMESTAMP === 'string') TIMESTAMP = parseInt(TIMESTAMP)
  if (typeof daysToAdd === 'string') daysToAdd = parseInt(daysToAdd)

  // checking units
  let unitValue = UnitInMilliseconds.DAY
  if (unit === 'day') unitValue = UnitInMilliseconds.DAY
  else if (unit === 'hour') unitValue = UnitInMilliseconds.HOUR
  else if (unit === 'min') unitValue = UnitInMilliseconds.MINUTE

  // setting actual days
  const daysInMilliseconds = unitValue * daysToAdd
  const value = TIMESTAMP + daysInMilliseconds

  if (isEndOfDay) return _moment(value).endOf('day').valueOf()
  return value
}
/**
 * Sort cut off time by in asc order
 *
 * @param {string[]} array
 * @return {*}  {string[]}
 */
export const sortTime = (array: string[] | Record<string, string>[], key?: string): string[] => {
  return orderBy(
    array,
    (a: string | Record<string, string>) => {
      if (typeof a === 'object' && key !== undefined) _moment(a[key], 'hh:mmA')
      return _moment(<string>a, 'hh:mmA')
    },
    ['asc']
  ) as string[]
}
