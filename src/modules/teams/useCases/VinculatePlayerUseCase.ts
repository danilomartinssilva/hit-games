import AppError from '@shared/errors/AppError';
import ILogger from '@shared/infra/logger/interfaces/ILogger';
import { inject, injectable } from 'tsyringe';
import ITeamsRepository from '../repositories/ITeamsRepository';



interface IRequest {
  ids:string[],
  teamId:string;


}

@injectable()
export default class VinculatePlayerUseCase {
  constructor(
    @inject('logger') private logger: ILogger,
    @inject('TeamRepository') private teamRepository: ITeamsRepository,
  ) {}

  public async execute({ids,teamId }: IRequest): Promise<any> {

    this.logger.log('info', 'checking teamId', {ids,teamId });
    if(!await this.teamRepository.findById(teamId)){

      throw new AppError('TeamId not found',{teamId},404);
    }

    this.logger.log('info', 'vinculating player', {ids,teamId });
    const response = await this.teamRepository.vinculate(ids,teamId);
    this.logger.log('info', 'vinculated player', { response });
    return response;
  }
}
