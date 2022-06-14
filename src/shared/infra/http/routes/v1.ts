import teamRouter from '@modules/teams/infra/http/routes/v1/teams.routes';


import { Router } from 'express';
const routes = Router();

routes.use('/teams', teamRouter);


export default routes;
