
const { clientDatabase, expertDatabase } = require('./database')
const printMatchingHistory = require('./lib/print-matching-history')

const hilmi = expertDatabase.findBy('name','Hilmi')
const armagan = clientDatabase.findByName('Armagan')

armagan.match(hilmi, 'Frankfurt','Frankfurt')
clientDatabase.update(armagan)

printMatchingHistory(armagan)

console.log(clientDatabase.findBy('location', 'Frankfurt'))