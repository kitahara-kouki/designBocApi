'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        icon: {
            field: "icon",
            type: Sequelize.STRING,
            allowNull: true
        },
        username: {
            field: "username",
            type: Sequelize.STRING,
            allowNull: false,
            unique: 'favorite',
        },
        password: {
            field: "password",
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        tableName: "users",
        modelName: "User",
        timestamps: true,
        updatedAt: "updated_at",
        createdAt: "created_at",
    });
    User.associate = function(models) {
        // アソシエーションの設定
        User.hasMany(models.Design, {
            foreignKey: 'user_id'
        });
        User.belongsToMany(models.Design, {
            through: models.Favorite,
            foreignKey: 'user_id',
            otherKey: 'design_id',
            as: 'favorites'
        });
    };
    return User;
};
