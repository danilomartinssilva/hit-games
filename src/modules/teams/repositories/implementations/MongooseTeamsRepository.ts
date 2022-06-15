

import TeamMongoose from '@modules/teams/infra/mongoose/schemas/Team';
import ITeamsRepository, { TeamRequest } from '../ITeamsRepository';




export default class MongooseTeamsRepository implements ITeamsRepository {

  async create(team: TeamRequest): Promise<boolean> {
    const response = await TeamMongoose.create(team);
    if (response) {
      return true;
    }
    return response;
  }

  async list ():Promise<Team[]>{
    return await TeamMongoose.find({}).populate({path:"players"});
  }
  async findById (id:string):Promise<Team|null>{
    return await TeamMongoose.findById(id).populate();
  }

  async vinculate(ids:string[],teamId:string):Promise<Team | null>{
    const update = await TeamMongoose.findByIdAndUpdate(teamId,{
      $push:{
        players:{
          $each:ids
        }
      }
    },{
      new:true
    })
    return update;
  }
}
