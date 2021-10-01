'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        parent_id: {
            field: "parent_id",
            type: Sequelize.INTEGER,
            allowNull: true
        },
        name: {
            field: "name",
            type: Sequelize.STRING,
            allowNull: false
        },
        html: {
            field: "html",
            type: Sequelize.TEXT,
            allowNull: true
        },
        css: {
            field: "css",
            type: Sequelize.TEXT,
            allowNull: true
        },
    }, {
        tableName: "categories", // テーブル名を直接指定
        timestamps: true,
        updatedAt: "updated_at",
        createdAt: "created_at",
    });
    Category.associate = function(models) {
        // アソシエーションの設定
        Category.hasMany(models.Category, {
            foreignKey: 'parent_id'
        });
        Category.belongsTo(models.Category, {
            foreignKey: 'parent_id',
        });
        Category.hasMany(models.Design, {
            foreignKey: 'category_id'
        });
    };
    return Category;
};
