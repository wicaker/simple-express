module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define(
      'users',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        full_name: {
          allowNull: true,
          type: DataTypes.STRING,
          validate: {
            min: {
              args: 4,
              msg: 'Username must start with a letter, have no spaces, and be at least 3 characters.'
            },
            max: {
              args: 40,
              msg:
                'Username must start with a letter, have no spaces, and be at less than 40 characters.'
            },
            is: {
              args: /^[A-Za-z]*\s?[A-Za-z0-9-]*\s?[A-Za-z]*\s?[A-Za-z0-9-]*\s?[A-Za-z][A-Za-z0-9-]+$/gi, // must start with letter and only have letters, numbers, dashes
              msg: 'Username must start with a letter and be 3 - 40 characters.'
            },
            notEmpty: { msg: 'Please input username' }
          }
        },
        email: {
          allowNull: false,
          type: DataTypes.STRING,
          unique: true,
          validate: {
            isEmail: true
          }
        },
        password: {
          allowNull: true,
          type: DataTypes.STRING
        },
        birthday: {
          allowNull: true,
          type: DataTypes.DATEONLY,
          validate: {
            isDate: true
          }
        },
        phone: {
          allowNull: true,
          unique: true,
          type: DataTypes.STRING
        },
        hash: {
          allowNull: true,
          type: DataTypes.STRING
        },
      },
      {
        timestamps: true,
        underscored: true
      }
    );
  
    // eslint-disable-next-line no-unused-vars
    User.associate = function(models) {
      // Define associations here
      // See http://docs.sequelizejs.com/en/latest/docs/associations
      User.hasOne(models.access_tokens, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      });
    };
    return User;
  };  