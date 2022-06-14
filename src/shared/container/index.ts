import MongooseTeamsRepository from '@modules/teams/repositories/implementations/MongooseTeamsRepository';
import ITeamRepository from '@modules/teams/repositories/ITeamsRepository';



import PinoLogger from '@shared/infra/logger/implementations/PinoLogger';
import ILogger from '@shared/infra/logger/interfaces/ILogger';
import { container } from 'tsyringe';

container.registerInstance<ILogger>('logger', PinoLogger);
container.registerSingleton<ITeamRepository>(
  'TeamRepository',
  MongooseTeamsRepository,
);

