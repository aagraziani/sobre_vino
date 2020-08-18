'use strict';

module.exports = (sequelize, DataTypes) => {

    let alias = "Anio";

    let cols = {
        id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true 
        },
        anio: {
            type: DataTypes.INTEGER
        }
    }

    let config = {
        tableName: "anio",
    }

    const Anio = sequelize.define(alias, cols, config);

    Anio.associate = function(models) {
        Anio.hasMany(models.Wines, {
            as: "wines",
            foreignKey: "anio_id"
        });
    }

    return Anio;
}