require('module-alias/register');
const { jwtHelpers, response, abilityFinder } = require('@helpers');
const {
  users: User,
  access_tokens: AccessToken,
} = require('@models');
const crypt = require('bcrypt');
const config = require('config');
const Sequelize = require('sequelize');
const { Op } = Sequelize;

const accessTokenService = {
  create: async (req, res) => {
    const { email, password } = req.body;
    const expires = 24 * 60 * 60;

    try { 
      const user = await User.findOne({where : { email : email}});
      if (!user) {
        return res.status(400).json(response(false, 'User not found!'));
      }
      if (crypt.compareSync( password, user.password)) {
        const token = jwtHelpers.createJWT(
          Object.assign({
            email: user.email,
            phone: user.phone,
            id: user.id,
          }),
          config.authentication.secret,
          expires
        );
        const payload = {
          access_token: token,
          refresh_token: jwtHelpers.refreshToken(),
          user_id: user.id,
          expiry_in: expires,
        };
        const accessToken = await AccessToken.create(payload);
        return res
          .status(200)
          .json(
            response(
              true,
              'Login successfully',
              accessToken,
              null
            )
          );
      }
      return res.status(422).json(response(false, 'Username atau password salah'));
    } catch (error) {
      if (error.errors) {
        return res.status(400).json(response(false, error.errors));
      }
      return res.status(400).json(response(false, error.message));
    }
  },
};

module.exports = accessTokenService;
