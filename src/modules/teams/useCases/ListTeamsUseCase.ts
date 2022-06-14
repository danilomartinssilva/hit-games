import ILogger from '@shared/infra/logger/interfaces/ILogger';
import { inject, injectable } from 'tsyringe';
import ITeamsRepository from '../repositories/ITeamsRepository';





@injectable()
export default class ListTeamsUseCase {
  constructor(
    @inject('logger') private logger: ILogger,
    @inject('TeamRepository') private teamRepository: ITeamsRepository,
  ) {}

  public async execute(): Promise<any> {
    this.logger.log('info',"listing teams")

    const data =  await this.teamRepository.list()
    this.logger.log('info','listed teams',{data});
    return data
  }
}
