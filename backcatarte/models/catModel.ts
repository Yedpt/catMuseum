// models/Book.ts
import { DataTypes} from 'sequelize';
import conectionDB from '../database/conectionDB.js'; // Importa tu conexión a la base de datos

// Definición de los atributos de Book
const catMeme = conectionDB.define('catMeme', {

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  likes : {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},
{
  timestamps: false,
});

export default catMeme;
