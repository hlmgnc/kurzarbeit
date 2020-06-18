
const { clientService, expertService } = require('./service')
const printMatchingHistory = require('./lib/print-matching-history')



async function main(){
    
    const hilmi =await expertService.findBy('name','Hilmi')
    const armagan =await clientService.findByName('Armagan')
    
    armagan.match(hilmi, 'Frankfurt','Frankfurt')
    clientService.update(armagan)

    printMatchingHistory(armagan)

    console.log(await clientService.findBy('location', 'Frankfurt'))

}

main()

