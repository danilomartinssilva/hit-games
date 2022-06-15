import ILogger from '@shared/infra/logger/interfaces/ILogger';
import { inject, injectable } from 'tsyringe';
import IPlayersRepository from '../repositories/IPlayersRepository';




@injectable()
export default class ListAllPlayers {
  constructor(
    @inject('logger') private logger: ILogger,
    @inject('PlayerRepository') private playerRepository: IPlayersRepository,
  ) {}

  public async execute(): Promise<any> {
    this.logger.log('info', 'listing players',{});
    const response = await this.playerRepository.findAll();
    this.logger.log('info', 'listed players', { response });
    return response;
  }
}
