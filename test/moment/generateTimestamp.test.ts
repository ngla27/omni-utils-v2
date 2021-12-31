import { generateTimestamp } from '../../src'

test('Should return current timestamp in milliseconds', () => {
  const TIMESTAMP: number = 1530518207007
  // mocking Date.now call
  const dateNowStub = jest.fn(() => TIMESTAMP)
  global.Date.now = dateNowStub

  // test
  expect(generateTimestamp()).toBe(TIMESTAMP)
  expect(dateNowStub).toHaveBeenCalled()

  // setting back date
  const realDateNow = Date.now.bind(global.Date)
  global.Date.now = realDateNow
})
