
import TeamMongoose from '@modules/teams/infra/mongoose/schemas/Team';
import  ITeamRepository, {
TeamRequest
} from '../ITeamsRepository';

export default class MongooseTeamsRepository implements ITeamRepository {

  async create(team: Team): Promise<boolean> {
    const response = await TeamMongoose.create(team);
    if (response) {
      return true;
    }
    return response;
  }


}
