import { Router } from 'express';
import PlayerController from '../../controllers/PlayersController';

const playerController = new PlayerController();
const playerRouter = Router();
playerRouter.route('/').post(playerController.create);
export default playerRouter;
