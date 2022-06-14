


import MongoosePlayerRepository from '@modules/players/repositories/implementations/MongoosePlayerRepository';
import IPlayersRepository from '@modules/players/repositories/IPlayersRepository';
import PinoLogger from '@shared/infra/logger/implementations/PinoLogger';
import ILogger from '@shared/infra/logger/interfaces/ILogger';
import { container } from 'tsyringe';

container.registerInstance<ILogger>('logger', PinoLogger);
container.registerSingleton<IPlayersRepository>(
  'PlayerRepository',
  MongoosePlayerRepository,
);

