

import CreateTeamUseCase from '@modules/teams/useCases/CreateTeamUseCase';
import ListTeamsUseCase from '@modules/teams/useCases/ListTeamsUseCase';
import VinculatePlayerUseCase from '@modules/teams/useCases/VinculatePlayerUseCase';
import FindByUseCase from '@modules/teams/useCases/FindByUseCase'
import { Request, Response } from 'express';
import { container } from 'tsyringe';
export default class TeamsController {


  public async create(request: Request, response: Response): Promise<Response> {
    const {birthday,name,state} = request.body;

    const createTeamUseCase = container.resolve(CreateTeamUseCase);
    await createTeamUseCase.execute({
      birthday,name,state
    });
    return response.status(201).send();
  }
  public async index(request: Request, response: Response): Promise<Response> {

    const createTeamUseCase = container.resolve(ListTeamsUseCase);
    const data = await createTeamUseCase.execute()
    return response.status(200).json(data)
  }

  public async findById(request: Request, response: Response): Promise<Response> {
    const {id} =  request.params;
    const findByUseCase = container.resolve(FindByUseCase);
    const data = await findByUseCase.execute({id:String(id)})
    return response.status(200).json(data)
  }
  public async vinculate(request: Request, response: Response): Promise<Response> {
    const {ids,teamId} = request.body;
    const vinculatePlayerUseCase = container.resolve(VinculatePlayerUseCase);
    const data = await vinculatePlayerUseCase.execute({ids,teamId})
    return response.status(201).json(data)
  }
}
