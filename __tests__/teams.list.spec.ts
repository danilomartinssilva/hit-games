import MongoDBMock from '@shared/infra/mongoose/fakes/MongoDBMock'
import 'reflect-metadata'
import  request  from 'supertest';
import app from '@shared/infra/http/app';
import playerFactory from '@modules/players/factories/playerFactory';
import TeamMongoose from '@modules/teams/infra/mongoose/schemas/Team';
import teamFactory from '@modules/players/factories/teamFactory';



const tf = teamFactory();
describe('team.list',()=>{
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
  it('should list teams',async()=>{
    await TeamMongoose.create(tf);
    const listRequest = await request(app).get('/api/v1/teams')
    .send(tf)

    expect(listRequest.status).toBe(200)
    expect(listRequest.body[0].name).toBe(tf.name)

  })
})
