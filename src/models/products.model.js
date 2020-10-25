module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define(
    'products',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: true,
        type: DataTypes.STRING,
        validate: {
          min: {
            args: 4,
            msg: 'Mame must start with a letter, have no spaces, and be at least 3 characters.'
          },
          max: {
            args: 40,
            msg:
              'Name must start with a letter, have no spaces, and be at less than 40 characters.'
          },
          notEmpty: { msg: 'Please input name product' }
        }
      },
      price: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: true,
        type: DataTypes.STRING
      },
      published: {
        allowNull: true,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      timestamps: true,
      underscored: true
    }
  );

  // eslint-disable-next-line no-unused-vars
  Product.associate = function(models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations
  };
  return Product;
};  