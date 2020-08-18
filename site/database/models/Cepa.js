'use strict';

module.exports = (sequelize, DataTypes) => {

    let alias = "Cepa";

    let cols = {
        id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true 
        },
        nombre: {
            type: DataTypes.STRING(100)
        }
    }

    let config = {
        tableName: "cepa",
    }

    const Cepa = sequelize.define(alias, cols, config);

    Cepa.associate = function(models) {
        Cepa.hasMany(models.Wines, {
            as: "wines",
            foreignKey: "cepa_id"
        });
    }

    return Cepa;
}