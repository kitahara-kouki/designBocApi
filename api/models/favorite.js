'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Favorite = sequelize.define('Favorite', {
        user_id: {
            field: "user_id",
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: 'favorite',
        },
        design_id: {
            field: "design_id",
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: 'favorite',
        }
    }, {
        tableName: "favorites",
        modelName: "Favorite",
        timestamps: true,
        updatedAt: "updated_at",
        createdAt: "created_at",
    });
    Favorite.associate = function(models) {
        // アソシエーションの設定
        Favorite.belongsTo(models.User, {
            foreignKey: 'user_id',
        });
        Favorite.belongsTo(models.Design, {
            foreignKey: 'design_id',
        });
    };
    return Favorite;
};
