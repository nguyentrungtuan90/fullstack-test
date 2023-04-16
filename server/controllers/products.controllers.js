import { Sequelize } from 'sequelize-cockroachdb';
import { products } from "../models/products.models.js";

export const getProducts = async (req, res) => {
  const { limit, page, search } = req.query;
  const Op = Sequelize.Op;
  try {
    const results = await products.findAndCountAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${search}%`,
            },
          },
          {
            category: {
              [Op.like]: `%${search}%`,
            },
          }
        ]
      },
      order: [["id", "ASC"]],
      limit: limit,
      offset: limit * (page - 1),
    });
    res.status(200).json(results);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const results = await products.findByPk(id)
    res.status(200).json(results);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}