const app = require('../..')
const request = require('supertest')(app)
test('creates a new matching', async (done) => {

    const clientToCreate = {
        name:'Test client',
        location: 'Wiesbaden'
    }
    const expertToCreate = {
        name:'Test expert',
        location: 'Wiesbaden',
        age:18
    }
    
    const origin ='wiesbaden'
    const destination ='wiesbaden'
    

    const clientResponse = await request
    .post('/clients').send(clientToCreate)
    .send(clientToCreate)
    .expect(200)

    
    const expertResponse = await request
    .post('/experts').send(expertToCreate)
    .send(expertToCreate)
    .expect(200)
    
    const matchingResponse = await request
    .post(`/clients/${clientResponse.body._id}/matchings`)
    .send({
      expertId: expertResponse.body._id,
      origin,
      destination
    })
    .expect(200)


    const matchingCreated = matchingResponse.body

    expect(matchingCreated).toMatchObject({
        expert: expertResponse.body,
        client: clientResponse.body,
        origin,
        destination
      })
    
      done()
    })