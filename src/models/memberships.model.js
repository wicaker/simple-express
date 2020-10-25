module.exports = function(sequelize, DataTypes) {
  const Membership = sequelize.define(
    'memberships',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      discountValue: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      discountQuota: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      discountIsPercentage: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      published: {
        allowNull: true,
        type: DataTypes.BOOLEAN
      },
      discountQuota: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      expiry_in: {
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
  Membership.associate = function(models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return Membership;
};
