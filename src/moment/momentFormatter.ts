import moment from 'moment-timezone'

/**
 * Converts a moment timestamp to a given format
 *
 * @param {MomentInput} TIMESTAMP
 * @param {string} format
 * @return {*}  {string}
 */
export const momentFormatter = (TIMESTAMP: string | number, format: string): string => {
  return moment.tz(Number(TIMESTAMP), 'Asia/Kuala_Lumpur').format(format)
}
