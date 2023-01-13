const { wrapping } = require('./index')

test('Christmas Gift', () => {
  expect(wrapping(['cat', 'game', 'socks'])).toStrictEqual(['*****\n*cat*\n*****', '******\n*game*\n******', '*******\n*socks*\n*******'])
})
