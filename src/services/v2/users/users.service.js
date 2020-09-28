require("module-alias/register");
const { response } = require("@helpers");
const { users: User } = require("@models");
const crypt = require("bcrypt");

const userService = {
  find: async (req, res) => {
    try {
      const user = await User.findAll();
      return res
        .status(200)
        .json(response(true, "User retrieved successfully", user, null));
    } catch (error) {
      if (error.errors) {
        return res.status(400).json(response(false, error.errors));
      }
      return res.status(400).json(response(false, error.message));
    }
  },

  get: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await User.findOne({ where: { id: userId } });
      if (user === null) {
        return res
          .status(400)
          .json(response(false, `User with id ${userId} not found`));
      }
      return res
        .status(200)
        .json(response(true, "User retrieved successfully", user, null));
    } catch (error) {
      if (error.errors) {
        return res.status(400).json(response(false, error.errors));
      }
      return res.status(400).json(response(false, error.message));
    }
  },

  /**
   * create user to database
   *
   */
  create: async (req, res) => {
    const { password, email, full_name, birthday, phone } = req.body;
    let user;

    try {
      user = await User.findOne({
        where: { email: email }
      });
      if (user) {
        return res
          .status(400)
          .json(
            response(
              false,
              "Akun sudah terdaftar. Mohon coba lagi dengan email lain."
            )
          );
      } else {
        // second parameter is salt for hash
        const hashPassword = crypt.hashSync(password, 15);
        const hash = crypt.hashSync(new Date().toString() + email, 10);
        const payload = Object.assign(
          {},
          {
            full_name,
            email,
            birthday,
            password: hashPassword,
            hash,
            phone
          }
        );
        user = await User.create(payload);
        return res
          .status(201)
          .json(response(true, "User has been registered successfully", user));
      }
    } catch (error) {
      if (error.errors) {
        return res.status(400).json(response(false, error.errors));
      }
      return res.status(400).json(response(false, error.message));
    }
  },
};

module.exports = userService;
