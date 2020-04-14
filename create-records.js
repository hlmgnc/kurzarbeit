const Expert = require ('./models/expert')
const Client = require ('./models/client')
const clientDatabase = require ('./database/client-database')
const expertDatabase = require ('./database/expert-database')

const printMatchingHistory = require ('./lib/print-matching-history')

const hilmi = Expert.create({name:'Hilmi', location : 'Frankfurt'})
const armagan =Client.create({name: 'Armagan', location : 'Frankfurt'})
const aykut = Client.create({name: 'Aykut', location : 'Frankfurt'})
const dogu = Expert.create({name: 'Dogu',location : 'Frankfurt'})



armagan.match(hilmi,'Frankfurt','Frankfurt')

async function main() {
try{

 await clientDatabase.save([armagan ,aykut])
 await expertDatabase.save([hilmi, dogu] )

 const sencer = Client.create({name :'sencer', location: 'Frankfurt'})

await clientDatabase.insert(sencer)

const clients = await clientDatabase.load()

} catch (e) {
    return console.log(e)
}

}
main()