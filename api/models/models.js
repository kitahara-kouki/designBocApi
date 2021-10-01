const Sequelize = require('sequelize');

const host     = 'localhost';
const database = 'design_app';
const username = 'root';
const password = '';

// 接続情報 (省略)
// 接続開始 (省略)
const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        min: 0,
        max: 5,
        acuire: 30000,
        idle  : 10000
    }
});

// モデルを定義する
const Models = {};
// 各モデルを設定する
Models.User = require('./user')(sequelize);
Models.Category = require('./category')(sequelize);
Models.Design = require('./design')(sequelize);
Models.Favorite = require('./favorite')(sequelize);

Object.keys(Models).forEach((key) => {
    const model = Models[key];
    if(model.associate) {
        model.associate(Models);
    }
});

// Sequelize 本体を設定する
Models.sequelize = sequelize;
Models.Sequelize = Sequelize;
// エクスポートする
module.exports = Models;
