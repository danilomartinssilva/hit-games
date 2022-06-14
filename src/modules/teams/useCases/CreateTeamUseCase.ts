import ILogger from '@shared/infra/logger/interfaces/ILogger';
import { inject, injectable } from 'tsyringe';
import ITeamsRepository from '../repositories/ITeamsRepository';



interface IRequest {
  name: string;
  state:string;
  birthday:Date;


}

@injectable()
export default class CreateTeamUseCase {
  constructor(
    @inject('logger') private logger: ILogger,
    @inject('TeamRepository') private teamRepository: ITeamsRepository,
  ) {}

  public async execute({ name,birthday,state }: IRequest): Promise<any> {
    this.logger.log('info', 'creating team', {name,birthday,state });
    const response = await this.teamRepository.create({ name,birthday,state});
    this.logger.log('info', 'created team', { response });
    return response;
  }
}
