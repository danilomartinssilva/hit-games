import playerRouter from '@modules/players/infra/http/routes/v1/players.routes';


import { Router } from 'express';
const routes = Router();

routes.use('/players', playerRouter);


export default routes;
