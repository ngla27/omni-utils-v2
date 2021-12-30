import createBinaryUUID from 'binary-uuid'

/**
 * Generates new buffer
 *
 * @return {*}  {Buffer}
 */
export const generateBuffer = (): Buffer => {
  return createBinaryUUID().buffer
}
/**
 * Generates new uuid
 *
 * @return {*}  {string}
 */
export const generateUUID = (): string => {
  return createBinaryUUID().uuid
}
