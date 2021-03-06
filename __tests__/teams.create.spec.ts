import MongoDBMock from '@shared/infra/mongoose/fakes/MongoDBMock'
import 'reflect-metadata'
import  request  from 'supertest';
import app from '@shared/infra/http/app';
import playerFactory from '@modules/players/factories/playerFactory';
import TeamMongoose from '@modules/teams/infra/mongoose/schemas/Team';
import teamFactory from '@modules/players/factories/teamFactory';



const tf = teamFactory();
describe('team.create',()=>{
  beforeAll(async()=>{
    await MongoDBMock.connect();
    await TeamMongoose.deleteMany({})
    jest.setTimeout(4000);
  })
  afterAll(async()=>{
    await MongoDBMock.disconnect()
  })
  beforeEach(async()=>{
    await TeamMongoose.deleteMany({})
  })
  it('should create players',async()=>{
    const createRequest = await request(app).post('/api/v1/teams')
    .send(tf)
    const listAdded = await TeamMongoose.find()
    expect(createRequest.status).toBe(201)
    expect(listAdded.length).toBe(1)
    expect(listAdded[0].name).toBe(tf.name)
  })
})
