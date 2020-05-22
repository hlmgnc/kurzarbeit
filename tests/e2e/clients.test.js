const app = require('../..')
const request = require('supertest')(app)
test('creates a new client', async (done) => {

    const clientToCreate = {
        name:'Test client',
        location: 'Wiesbaden'
    }
    const response = await request
    .post('/clients').send(clientToCreate)
    .send(clientToCreate)
    .expect(200)

    const clientCreated = response.body

    expect(clientCreated).toMatchObject(clientToCreate)
    expect(clientCreated.matchings).toEqual([])
  
    done()
  })

  test('loads a client',async (done) => {
      


    const clientToCreate = {
      name: 'Test Client 2',
      location : 'test location'
  }

  const response = await request
    .get('/clients')
    .expect(200)

    done()
})

