'use strict';

module.exports = (sequelize, DataTypes) => {

    let alias = "Maridaje";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(200)
        }
    }

    let config = {
        tableName: "maridaje",
    }

    const Maridaje = sequelize.define(alias, cols, config);

    Maridaje.associate = function(models) {
        Maridaje.hasMany(models.Wines, {
            as: "wines",
            foreignKey: "maridaje_id"
        });
    }

    return Maridaje;
}