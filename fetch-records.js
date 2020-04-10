
const { clientDatabase, expertDatabase } = require('./database')
const printMatchingHistory = require('./lib/print-matching-history')



async function main(){
    
    const hilmi =await expertDatabase.findBy('name','Hilmi')
    const armagan =await clientDatabase.findByName('Armagan')
    
    armagan.match(hilmi, 'Frankfurt','Frankfurt')
    clientDatabase.update(armagan)

    printMatchingHistory(armagan)

    console.log(await clientDatabase.findBy('location', 'Frankfurt'))

}

main()

