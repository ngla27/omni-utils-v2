/**
 * Converts binary to readable string uuid
 *
 * @param {Buffer} buf
 * @return {*}  {string}
 */
export const binaryToUuid = (buf: Buffer): string => {
  return [
    buf.toString('hex', 4, 8),
    buf.toString('hex', 2, 4),
    buf.toString('hex', 0, 2),
    buf.toString('hex', 8, 10),
    buf.toString('hex', 10, 16),
  ].join('-')
}
/**
 * Converts string uuid to binary
 *
 * @param {string} uuid
 * @return {*}  {Buffer}
 */
export const uuidToBinary = (uuid: string): Buffer => {
  const buf = Buffer.from(uuid.replace(/-/g, ''), 'hex')
  return Buffer.concat([buf.slice(6, 8), buf.slice(4, 6), buf.slice(0, 4), buf.slice(8, 16)])
}
/**
 * Converts string uuid to hex
 *
 * @param {string} uuid
 * @returns {string}
 */
export const uuidToHex = (uuid: string): string => {
  const buf = uuidToBinary(uuid)
  const HEX = binaryToHex(buf)
  return `${HEX}`
}
/**
 * Converts binary to hex
 *
 * @param {Buffer} binary
 * @returns {string}
 */
export const binaryToHex = (buf: Buffer): string => {
  const hex = Array.prototype.map
    .call(new Uint8Array(buf), (x: number) => `00${x.toString(16)}`.slice(-2))
    .join('')
  const HEX = hex.toUpperCase()
  return `${HEX}`
}
