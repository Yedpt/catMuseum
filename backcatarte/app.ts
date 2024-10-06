import conectionDB from './database/conectionDB.js'; // Import database connection
import catMeme from './models/catModel.js';  // Import model from table Meme
import express from 'express';
import cors from 'cors';
import { router } from './routers/catRouter.js';
import {PORT} from './config.js';



const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // O el dominio donde esté corriendo tu front-end
}));
app.use(express.json());

app.use('/', router);
app.use('/creatememe', router);
app.use('/deletememe', router);
app.use('/updatememe', router);

  try {
    await conectionDB.authenticate();  // Autheticas the database
    console.log('Conexión a la base de datos exitosa');

    // Fetch all memes from the database
   await catMeme.sync({ force: false });
   console.log('Tabla de memes creada');

  } catch (error) {
    console.error('Error al conectar o consultar la base de datos 😒:', error);
  }


app.listen((PORT || 3000), () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}/`);;
});