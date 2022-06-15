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


    expect(listRequest.status).toBe(200)
    expect(listRequest.body[0].name).toBe(tf.name)

  })
  it('should findById',async()=>{
    const createdTeam =  await TeamMongoose.create(tf);
    const listRequest = await request(app).get('/api/v1/teams/'+createdTeam._id)

    expect(listRequest.status).toBe(200)
    expect(listRequest.body.name).toBe(tf.name)

  })
  it('should return 404 when not search team',async()=>{
    const createdTeam =  await TeamMongoose.create(tf);
    const listRequest = await request(app).get('/api/v1/teams/62a8ca2afc15f3642608b388')

    expect(listRequest.status).toBe(404)


  })

})
