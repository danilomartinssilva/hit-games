export type TeamRequest = {
  name: string;
  position:string;
  height: number
  weight: number
};




export default interface ITeamRepository {

  create(team: TeamRequest): Promise<boolean>;

}
