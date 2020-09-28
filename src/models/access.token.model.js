module.exports = function(sequelize, DataTypes) {
    const AccessToken = sequelize.define(
      'access_tokens',
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
        access_token: {
          allowNull: false,
          type: DataTypes.TEXT
        },
        refresh_token: {
          allowNull: false,
          type: DataTypes.STRING
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
    AccessToken.associate = function(models) {
      // Define associations here
      // See http://docs.sequelizejs.com/en/latest/docs/associations/
      AccessToken.belongsTo(models.users, {
        foreignKey: 'user_id',
        as: 'user'
      });
    };
  
    return AccessToken;
  };
  