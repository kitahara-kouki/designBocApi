'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Categories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            parent_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'Categories',
                        key: 'id',
                    },
                },
                allowNull: true,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            html: {
                allowNull: true,
                type: Sequelize.TEXT
            },
            css: {
                allowNull: true,
                type: Sequelize.TEXT
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Categories');
    }
};
