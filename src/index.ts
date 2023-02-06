import express from 'express';
import cors from 'cors'

import indexRoute from '@src/routes/index.route';

import { ENV_PORT } from '@src/utils/config';

import bodyParser from 'body-parser';
const app: express.Application = express();
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.get('/', async (_req, res: express.Response) => {
  res.status(200).json({ message: 'Bien' });
});

app.use('/api', indexRoute);

app.listen(ENV_PORT, () =>
  console.log(`El servidor esta corriendo en el puerto ${ENV_PORT}`)
);
