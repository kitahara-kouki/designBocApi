'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Design = sequelize.define('Design', {
        user_id: {
            field: "user_id",
            type: Sequelize.INTEGER,
            allowNull: false
        },
        category_id: {
            field: "category_id",
            type: Sequelize.INTEGER,
            allowNull: false
        },
        title: {
            field: "title",
            type: Sequelize.STRING,
            allowNull: false
        },
        desc: {
            field: "desc",
            type: Sequelize.STRING,
            allowNull: false
        },
        html: {
            field: "html",
            type: Sequelize.STRING,
            allowNull: false
        },
        css: {
            field: "css",
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        tableName: "designs", // テーブル名を直接指定
        timestamps: true,
        updatedAt: "updated_at",
        createdAt: "created_at",
    });
    Design.associate = function(models) {
        // アソシエーションの設定
        Design.belongsTo(models.User, {
            foreignKey: 'user_id',
        });
        Design.belongsTo(models.Category, {
            foreignKey: 'category_id',
        });
        // お気に入り用
        Design.hasMany(models.Favorite, {
            foreignKey: 'design_id',
        });
        Design.belongsToMany(models.User, {
            through: models.Favorite,
            foreignKey: 'design_id',
            otherKey: 'user_id',
            as: 'favorites'
        });
    };
    return Design;
};
