module.exports = function(sequelize, DataTypes) {
  const OwnMembership = sequelize.define(
    'own_membership',
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
      membership_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        foreignKey: true,
        references: {
          model: 'membership',
          key: 'id'
        }
      },
    },
    {
      timestamps: true,
      underscored: true
    }
  );

  // eslint-disable-next-line no-unused-vars
  OwnMembership.associate = function(models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    OwnMembership.belongsTo(models.users, {
      foreignKey: 'user_id',
      as: 'user'
    });
    OwnMembership.belongsTo(models.memberships, {
      foreignKey: 'membership_id',
      as: 'membership'
    });
  };

  return OwnMembership;
};
