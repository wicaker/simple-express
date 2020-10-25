module.exports = function(sequelize, DataTypes) {
  const ProductPurchase = sequelize.define(
    'product_purchase',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        foreignKey: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      product_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        foreignKey: true,
        references: {
          model: 'products',
          key: 'id'
        }
      },
      charge: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
      paymentType: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
    },
    {
      timestamps: true,
      underscored: true
    }
  );

  // eslint-disable-next-line no-unused-vars
  ProductPurchase.associate = function(models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    ProductPurchase.belongsTo(models.users, {
      foreignKey: 'user_id',
      as: 'user'
    });
    ProductPurchase.belongsTo(models.products, {
      foreignKey: 'product_id',
      as: 'product'
    });
  };

  return ProductPurchase;
};
