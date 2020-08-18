'use strict';

module.exports = (sequelize, DataTypes) => {

    let alias = "Wines";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        bodega: {
            type: DataTypes.STRING(100)
        },
        precio: {
            type: DataTypes.INTEGER
        },
        descripcion: {
            type: DataTypes.TEXT
        },
        anio_id: {
            type: DataTypes.INTEGER
        },
        cepa_id: {
            type: DataTypes.INTEGER
        },
        maridaje_id: {
            type: DataTypes.INTEGER
        },
        foto: {
            type: DataTypes.STRING(500)
        }

    }

    let congig = {
        tableName: "wines",
    }

    const Wines = sequelize.define(alias, cols, config);

    Wines.associate = function(models) {
        Wines.belongsTo(models.Anio, {
            as: "anio",
            foreignKey: "anio_id"
        });

        Wines.belongsTo(models.Cepa, {
            as: "cepa",
            foreignKey: "cepa_id"
        });

        Wines.belongsToMany(models.User, {
            as: "user",
            through: "user_wine",
            foreignKey: "wine_id",
            otherKey: "user_id",
        });
    }

    return Wines;

}