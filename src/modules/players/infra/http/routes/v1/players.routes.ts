import { Router } from 'express';
import PlayerController from '../../controllers/PlayersController';

const playerController = new PlayerController();
const teamRouter = Router();
teamRouter.route('/').post(playerController.create);
export default teamRouter;
