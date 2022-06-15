import AppError from '@shared/errors/AppError';
import ILogger from '@shared/infra/logger/interfaces/ILogger';
import { inject, injectable } from 'tsyringe';
import ITeamsRepository from '../repositories/ITeamsRepository';

interface IRequest{
  id:string
}

@injectable()
export default class FindByUseCase {
  constructor(
    @inject('logger') private logger: ILogger,
    @inject('TeamRepository') private teamRepository: ITeamsRepository,
  ) {}

  public async execute({id}:IRequest): Promise<Team | null> {
    this.logger.log('info',"finding team")
    const data =  await this.teamRepository.findById(id)
    if(!data) throw new AppError("Team Not Found",{id},404)
    this.logger.log('info','returned team',{data});
    return data
  }
}
