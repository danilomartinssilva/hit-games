import teamRouter from '@modules/teams/infra/http/routes/v1/teams.routes'
import playerRouter from '@modules/players/infra/http/routes/v1/players.routes';


import { Router } from 'express';
const routes = Router();

routes.use('/players', playerRouter);
routes.use('/teams',teamRouter)


export default routes;
