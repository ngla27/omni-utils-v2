import moment, { Moment } from 'moment-timezone'

/**
 * Converts a timestamp to a given date format
 * Visit https://momentjs.com/docs/#/displaying/format/ to read more on moment formats
 *
 * @param {string | number} TIMESTAMP
 * @param {string} format
 * @return {*}  {string}
 */
export const momentFormatter = (TIMESTAMP: string | number, format: string): string => {
  return moment.tz(Number(TIMESTAMP), 'Asia/Kuala_Lumpur').format(format)
}
/**
 * Returns moment object to use moment functions
 * NOTE: _moment takes <string>date and format of given date or timestamp to result a Moment object
 * NOTE2: To convert <number>timestamp to specific date format in string use _momentFormatter()
 *
 * @param {string | number} value
 * @return {*}  {Moment}
 */
export const _moment = (value: string | number, format?: string): Moment => {
  if (format) return moment.tz(<string>value, format, 'Asia/Kuala_Lumpur')
  return moment.tz(Number(value), 'Asia/Kuala_Lumpur')
}
