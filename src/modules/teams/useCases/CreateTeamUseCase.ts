import ILogger from '@shared/infra/logger/interfaces/ILogger';
import { inject, injectable } from 'tsyringe';
import ITeamRepository from '../repositories/ITeamsRepository';


interface IRequest {
  name: string;
  position:string;
  height: number
  weight: number;
}

@injectable()
export default class CreateTeamUseCase {
  constructor(
    @inject('logger') private logger: ILogger,
    @inject('TeamRepository') private teamRepository: ITeamRepository,
  ) {}

  public async execute({ height,name,position,weight }: IRequest): Promise<any> {
    this.logger.log('info', 'creating team', { height,name,position,weight });
    const response = await this.teamRepository.create({
      height,name,position,weight
    });
    this.logger.log('info', 'created team', { response });
    return response;
  }
}
