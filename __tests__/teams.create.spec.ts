import PLayerMongoose from '@modules/players/infra/mongoose/schemas/Player';
import MongoDBMock from '@shared/infra/mongoose/fakes/MongoDBMock'


import 'reflect-metadata'
import  request  from 'supertest';
import app from '@shared/infra/http/app';
import playerFactory from '@modules/players/factories/playerFactory';



const pf = playerFactory();
describe('player.create',()=>{
  beforeAll(async()=>{
    await MongoDBMock.connect();
    await PLayerMongoose.deleteMany({})
    jest.setTimeout(4000);
  })
  afterAll(async()=>{
    await MongoDBMock.disconnect()
  })
  beforeEach(async()=>{
    await PLayerMongoose.deleteMany({})
  })
  it('should create players',async()=>{
    const createRequest = await request(app).post('/api/v1/players')
    .send(pf)
    const listAdded = await PLayerMongoose.find()
    expect(createRequest.status).toBe(201)
    expect(listAdded.length).toBe(1)
    expect(listAdded[0].name).toBe(pf.name)
  })
})
