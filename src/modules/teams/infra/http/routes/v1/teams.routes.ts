import { Router } from 'express';
import TeamsController from '../../controllers/TeamController';

const teamController = new TeamsController();
const teamRouter = Router();
teamRouter.route('/').post(teamController.create);
export default teamRouter;
