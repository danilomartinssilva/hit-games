export type PlayerRequest = {
  name: string;
  birthday:Date;
  state:string;
};




export default interface IPlayersRepository {

  create(player: PlayerRequest): Promise<boolean>;

}
