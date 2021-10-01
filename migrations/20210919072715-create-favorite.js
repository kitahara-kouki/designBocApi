'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Favorites', {
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
            design_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'Designs',
                        key: 'id',
                    },
                },
                allowNull: false,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        }, {
            uniqueKeys: {
                userDesignFavorite: {
                    fields: ['user_id', 'design_id']
                }
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Favorites');
    }
};
