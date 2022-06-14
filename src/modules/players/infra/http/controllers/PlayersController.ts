
import CreatePlayerUseCase from '@modules/players/useCases/CreatePlayerUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
export default class PlayersController {


  public async create(request: Request, response: Response): Promise<Response> {
    const {name,wheight,height,position} = request.body;

    const createPlayerUseCase = container.resolve(CreatePlayerUseCase);
    await createPlayerUseCase.execute({
      name,wheight,height,position

    });
    return response.status(201).send();
  }
}
