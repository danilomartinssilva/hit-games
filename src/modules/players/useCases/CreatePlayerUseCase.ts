import ILogger from '@shared/infra/logger/interfaces/ILogger';
import { inject, injectable } from 'tsyringe';
import IPlayersRepository from '../repositories/IPlayersRepository';


interface IRequest {
  name: string;
  position:string;
  wheight:number;
  height:number;

}

@injectable()
export default class CreatePlayerUseCase {
  constructor(
    @inject('logger') private logger: ILogger,
    @inject('PlayerRepository') private playerRepository: IPlayersRepository,
  ) {}

  public async execute({height,position,wheight,name }: IRequest): Promise<any> {
    this.logger.log('info', 'creating team', { name,wheight,height,position});
    const response = await this.playerRepository.create({name,wheight,position
    ,height });
    this.logger.log('info', 'created team', { response });
    return response;
  }
}
