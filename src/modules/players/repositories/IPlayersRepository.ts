export type PlayerRequest = {
  name: string;
  position:string;
  height:number;
  wheight:number;
};




export default interface IPlayersRepository {

  create(player: PlayerRequest): Promise<boolean>;

}
