const Expert = require ('./models/expert')
const Client = require ('./models/client')
const clientService = require ('./service/client-service')
const expertService = require ('./service/expert-service')

const printMatchingHistory = require ('./lib/print-matching-history')

const hilmi = Expert.create({name:'Hilmi', location : 'Frankfurt'})
const armagan =Client.create({name: 'Armagan', location : 'Frankfurt'})
const aykut = Client.create({name: 'Aykut', location : 'Frankfurt'})
const dogu = Expert.create({name: 'Dogu',location : 'Frankfurt'})



armagan.match(hilmi,'Frankfurt','Frankfurt')

async function main() {
try{

 await clientService.save([armagan ,aykut])
 await expertService.save([hilmi, dogu] )

 const sencer = Client.create({name :'sencer', location: 'Frankfurt'})

await clientService.insert(sencer)

const clients = await clientService.load()

} catch (e) {
    return console.log(e)
}

}
main()