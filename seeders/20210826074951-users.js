'use strict';
const bcrypt = require('bcrypt');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const now = new Date();
        const password = "password";
        let hashed_password = bcrypt.hashSync(password, 10);
        
        return queryInterface.bulkInsert('Users', [
            {icon: null, username: 'kouki', password: hashed_password, created_at: now, updated_at: now},
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
