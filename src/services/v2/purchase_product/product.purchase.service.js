require('module-alias/register');
const { jwtHelpers, response, abilityFinder } = require('@helpers');
const {
  users: User,
  product_purchase: ProductPurchase,
  products: Product
} = require('@models');
const crypt = require('bcrypt');
const config = require('config');
const Sequelize = require('sequelize');
const { Op } = Sequelize;

const productPurchaseService = {
  create: async (req, res) => {
    const { product_id, paymentType } = req.body;


    try { 
      const product = await Product.findOne({where : { id : product_id}});
      if (!product) {
        return res.status(400).json(response(false, 'Product not found!'));
      }

      console.log("product", )
        const payload = {
          product_id: product.id,
          charge: product.price,
          // user_id: user.id,
          paymentType: paymentType,
        };
        const productPurchase = await ProductPurchase.create(payload);
        return res
          .status(200)
          .json(
            response(
              true,
              'Successfully created',
              productPurchase,
              null
            )
          );
    } catch (error) {
      if (error.errors) {
        return res.status(400).json(response(false, error.errors));
      }
      return res.status(400).json(response(false, error.message));
    }
  },
};

module.exports = productPurchaseService;