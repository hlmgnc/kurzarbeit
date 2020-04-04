const Expert = require ('./models/expert')
const Client = require ('./models/client')
const clientDatabase = require ('./database/client-database')
const expertDatabase = require ('./database/expert-database')

const printMatchingHistory = require ('./lib/print-matching-history')

const hilmi = Expert.create({name:'Hilmi', location : 'Frankfurt'})
const armagan =Client.create({name: 'Armagan', location : 'Frankfurt'})
const aykut = Client.create({name: 'Aykut', location : 'Frankfurt'})
const dogu = Expert.create({name: 'Dogu',location : 'Frankfurt'})

clientDatabase.save([armagan ,aykut])
expertDatabase.save([hilmi, dogu] )

armagan.match(hilmi,'Frankfurt','Frankfurt')
dogu.match(aykut,'Frankfurt','Frankfurt')

const sencer = Client.create({name :'sencer', location: 'Frankfurt'})

clientDatabase.insert(sencer)

const client = db.load('clients')

clientDatabase.forEach(printMatchingHistory)