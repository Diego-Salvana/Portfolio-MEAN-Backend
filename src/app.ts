import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes';
import { dbConnection } from './database/mongoConnection';

const PORT = process.env.PORT;

const app = express();

dbConnection()
   .then(() => console.log('DB conectada 📖'))
   .catch((err) => {
      console.log(err);
      throw new Error('Error al inicializar DB');
   });

app.use(cors());

app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

export default app;
