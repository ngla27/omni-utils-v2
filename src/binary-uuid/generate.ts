import { v1 as uuidv1 } from 'uuid'
import { uuidToBinary } from './convert'

/**
 * Returns randomly generated uuid and binary
 *
 * @return {*}  {{ uuid: string; buffer: Buffer }}
 */
export const createBinaryUUID = (): { uuid: string; buffer: Buffer } => {
  const uuid = uuidv1()
  return Object.assign(Object.create({ toString: () => uuid }), {
    uuid,
    buffer: uuidToBinary(uuid),
  })
}
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
