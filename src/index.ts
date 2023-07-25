import express from 'express';
import config from './utils/config';
import cors from 'cors';
import webhookRouter from './routes/webhookRouter';
import ticketRouter from './routes/ticketRouter';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.use('/webhook', webhookRouter);
app.use('/tickets', ticketRouter);

app.listen(config.PORT, () => {
  console.log(`Listening to port ${config.PORT}`);
});
