export type TeamRequest = {
  name: string;
  birthday:Date;
  state:string;
};

export default interface ITeamsRepository {

  create(team: TeamRequest): Promise<boolean>;
  list():Promise<Team[]>
  vinculate(ids:string[],teamId:string):Promise<Team | null>
  findById(id:string):Promise<Team | null>

}
