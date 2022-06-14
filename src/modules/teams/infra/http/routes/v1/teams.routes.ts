import { Router } from 'express';
import TeamsController from '../../controllers/TeamsController';

const teamController = new TeamsController();
const teamRouter = Router();
teamRouter.route('/').post(teamController.create);
teamRouter.route('/').get(teamController.index);
teamRouter.route('/').put(teamController.vinculate);

export default teamRouter;
