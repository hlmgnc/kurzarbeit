const printMatchingHistory = require('../print-matching-history')

test('prints client matchings when a client has a matching', () => {
   
    const client = {
        name: 'Dogu',
        matchings : [{
        client: { name: 'Dogu' },
        expert: { name: 'Mertcan' },
        origin: 'Berlin',
        destination: 'Berlin'
    }]
}
    const consoleSpy = jest.spyOn(console, 'log')

    printMatchingHistory(client)

    expect(consoleSpy).toHaveBeenCalledWith('Dogu matched with Mertcan to work in Berlin')
 

    consoleSpy.mockRestore()
})

test('prints warning message when client has no matchings', () => {
   
    const client = {
        name: 'Dogu',
        matchings : []
}
    const consoleSpy = jest.spyOn(console, 'log')

    printMatchingHistory(client)

    expect(consoleSpy).toHaveBeenCalledWith('Dogu has no matchings yet.')
 

    consoleSpy.mockRestore()
})