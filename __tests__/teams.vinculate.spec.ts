import MongoDBMock from '@shared/infra/mongoose/fakes/MongoDBMock'
import 'reflect-metadata'
import  request  from 'supertest';
import app from '@shared/infra/http/app';
import playerFactory from '@modules/players/factories/playerFactory';
import TeamMongoose from '@modules/teams/infra/mongoose/schemas/Team';
import teamFactory from '@modules/players/factories/teamFactory';
import PlayerMongoose from '@modules/players/infra/mongoose/schemas/Player';



const tf = teamFactory();
describe('vinculate.player',()=>{
  beforeAll(async()=>{
    await MongoDBMock.connect();
    await PlayerMongoose.deleteMany({})
    await TeamMongoose.deleteMany({})

  })
  afterAll(async()=>{
    await MongoDBMock.disconnect()
  })
  beforeEach(async()=>{
    await PlayerMongoose.deleteMany({})
    await TeamMongoose.deleteMany({})
  })
  it('should list teams',async()=>{
    const createFactoryPlayer = await PlayerMongoose.create({...playerFactory()})
    const createFactoryTeam = await TeamMongoose.create({...teamFactory()})

    const listRequest = await request(app).put('/api/v1/teams')
    .send({ids:[createFactoryPlayer._id],teamId:createFactoryTeam._id})

    expect(listRequest.status).toBe(201)
    expect(listRequest.body.players).toBeTruthy()
    expect(listRequest.body.players.length).toBe(1)

  })
  it('should when not found teamId return 404',async()=>{
    const createFactoryPlayer = await PlayerMongoose.create({...playerFactory()})


    const listRequest = await request(app).put('/api/v1/teams')
    .send({ids:[createFactoryPlayer._id],teamId:createFactoryPlayer._id})

    expect(listRequest.status).toBe(404)



  })
})
