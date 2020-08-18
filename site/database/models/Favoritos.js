'use strict';

module.exports = (sequelize, DataTypes) => {
    
    let alias = "Favoritos";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        wine_id: {
            type: DataTypes.INTEGER
        }
    }

    let config = {
        tableName: "favoritos",
    }

    const Favoritos = sequelize.define(alias, cols, config);

    return Favoritos;
}