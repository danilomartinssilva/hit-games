
import PlayerMongoose from '@modules/players/infra/mongoose/schemas/Player';

import IPlayersRepository, { PlayerRequest } from '../IPlayersRepository';


export default class MongoosePlayerRepository implements IPlayersRepository {

  async create(player: PlayerRequest): Promise<boolean> {
    const response = await PlayerMongoose.create(player);
    if (response) {
      return true;
    }
    return response;
  }
  async findAll():Promise<Player[]>{
    return await PlayerMongoose.find({});
  }


}
