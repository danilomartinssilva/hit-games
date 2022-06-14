import ILogger from '@shared/infra/logger/interfaces/ILogger';
import { inject, injectable } from 'tsyringe';
import IPlayersRepository from '../repositories/IPlayersRepository';


interface IRequest {
  name: string;
  birthday:Date;
  state:string;

}

@injectable()
export default class CreatePlayerUseCase {
  constructor(
    @inject('logger') private logger: ILogger,
    @inject('PlayerRepository') private playerRepository: IPlayersRepository,
  ) {}

  public async execute({ name,birthday,state }: IRequest): Promise<any> {
    this.logger.log('info', 'creating team', { name,birthday,state});
    const response = await this.playerRepository.create({ name,birthday,state});
    this.logger.log('info', 'created team', { response });
    return response;
  }
}
