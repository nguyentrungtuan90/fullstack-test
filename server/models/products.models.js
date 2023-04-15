import { DATABASE_URL } from '../config/db.config.js';
import { Sequelize } from 'sequelize-cockroachdb';
const sequelize = new Sequelize(DATABASE_URL);

export const products = sequelize.define("products", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true, 
    primaryKey: true,
  },
  name: {
    type: Sequelize.TEXT,
  },
  description: {
    type: Sequelize.TEXT,
  },
  price: {
    type: Sequelize.INTEGER,
  },
  category: {
    type: Sequelize.TEXT,
  }
}, {timestamps: false});