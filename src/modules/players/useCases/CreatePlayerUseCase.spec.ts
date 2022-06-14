import 'reflect-metadata';
import FakeLogger from "@shared/infra/logger/fakes/FakeLogger";
import MongoDBMock from "@shared/infra/mongoose/fakes/MongoDBMock"
import teamFactory from "../factories/teamFactory";
import MongoosePlayerRepository from "../repositories/implementations/MongoosePlayerRepository";
import CreateTeamUseCase from "./CreatePlayerUseCase";
import playerFactory from '../factories/playerFactory';
import PlayerMongoose from '../infra/mongoose/schemas/Player';
const pf = playerFactory();
const playerRepository = new MongoosePlayerRepository()
const createTeamUseCase = new CreateTeamUseCase(FakeLogger,playerRepository)
describe('CreateTeamUseCase',()=>{
  beforeAll(async()=>{
    await MongoDBMock.connect();
    await PlayerMongoose.deleteMany();

  })
  afterAll(async()=>MongoDBMock.disconnect())
  it('should create team',async()=>{
    const createdTeam = await createTeamUseCase.execute({...pf})
    expect(createdTeam).toBe(true)
  })
})
