import CreateTeamUseCase from '@modules/teams/useCases/CreateTeamUseCase';

import { Request, Response } from 'express';
import { container } from 'tsyringe';
export default class TeamsController {


  public async create(request: Request, response: Response): Promise<Response> {
    const { name,position,height,weight } = request.body;

    const createTeam = container.resolve(CreateTeamUseCase);
    await createTeam.execute({
      name,height,weight,position,
    });
    return response.status(201).send();
  }
}
