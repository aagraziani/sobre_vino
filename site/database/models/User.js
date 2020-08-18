'use strict';

module.exports = (sequlize, DataTypes) => {
    
   let alias = 'User';

   let cols = {
        
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: {
            allowNull: false,
            type: DataTypes.STRING(50)
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING(50)
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING(50)
        },
        foto: {
            allowNull: true,
            type: DataTypes.STRING(500)
        },
        admin: {
            type: DataTypes.BOOLEAN
        }
    }

    let config = { 
        tableName: "user",
    }

    const User = sequlize.define(alias, cols, config);

    User.associate = function(models) {
        User.belongsToMany(models.Wine, {
            as: "favoritos",
            through: "user_wine",
            foreignKey: "user_id",
            otherKey: "wine_id",
        });

        return User;
    }


    
}