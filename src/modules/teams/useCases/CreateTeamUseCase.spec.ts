import 'reflect-metadata';
import FakeLogger from "@shared/infra/logger/fakes/FakeLogger";
import MongoDBMock from "@shared/infra/mongoose/fakes/MongoDBMock"
import teamFactory from "../factories/teamFactory";
import MongooseTeamsRepository from "../repositories/implementations/MongooseTeamsRepository";
import CreateTeamUseCase from "./CreateTeamUseCase";

import TeamMongoose from '../infra/mongoose/schemas/Team';
const tf = teamFactory();
const teamRepository = new MongooseTeamsRepository()
const createTeamUseCase = new CreateTeamUseCase(FakeLogger,teamRepository)
describe('CreateTeamUseCase',()=>{
  beforeAll(async()=>{
    await MongoDBMock.connect();
    await TeamMongoose.deleteMany();

  })
  afterAll(async()=>MongoDBMock.disconnect())
  it('should create team',async()=>{
    const createdTeam = await createTeamUseCase.execute({...tf})
    expect(createdTeam).toBe(true)
  })
})
