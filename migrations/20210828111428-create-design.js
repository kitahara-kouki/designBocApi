'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Designs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'Users',
                        key: 'id',
                    },
                },
                allowNull: false,
            },
            category_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'Categories',
                        key: 'id',
                    },
                },
                allowNull: false,
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING
            },
            desc: {
                allowNull: false,
                type: Sequelize.STRING
            },
            html: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            css: {
                allowNull: false,
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
        await queryInterface.dropTable('Designs');
    }
};
