const Models = require('../models/models');
const bcrypt = require('bcrypt');

exports.index = function(req, res) {
    const options = {
        where: {}
    };

    if(req.query['title']) {
        options.where['title'] = req.query['title'];
    }

    Models.User.findAll(options)
    .then((result) => {
        // 200:OK と、JSON 形式の結果データ dataValues を返す
        res.status(200);
        res.json(result);
    })
    .catch((error) => {
        res.status(404);
        res.json(error);
    });
};

exports.create = function(req, res) {
    const password = req.body.password;
    let hashed_password = bcrypt.hashSync(password, 10);
    req.body.password = hashed_password;

    Models.User.create(req.body)
    .then(user => {
        res.status(200);
        res.json(user);
    })
    .catch((error) => {
        res.status(404);
        res.json(error);
    });
};

exports.show = function(req, res) {
    Models.User.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            model: Models.Design,
            required: false,
            include: [{
                model: Models.Category,
                required: false,
            }]
        }]
    }).then(result => {
        res.status(200);
        res.json(result);
    })
    .catch((error) => {
        console.log(error);
        res.status(404);
        res.json(error);
    });
};

// 特定のタスクを更新する。
exports.update = function(req, res) {
    Models.Design.update(
        {
            name: req.body.title,
            desc: req.body.desc,
            html: req.body.html,
            css: req.body.css,
        },
        { where: { id: req.params.id }
    }).then(result => {
        res.status(200);
        res.json(result);
    })
    .catch((error) => {
        res.status(404);
        res.json(error);
    });
};

// 特定のタスクを削除する。
exports.delete = function(req, res) {
    Models.User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(result => {
        res.status(200);
        res.json(result);
    })
    .catch((error) => {
        res.status(404);
        res.json(error);
    });
};

// check unique username
exports.check = function(req, res) {
    Models.User.findAll({
        where: {
            username: req.body.username
        }
    })
    .then(result => {
        res.status(200);
        if(result.length > 0) {
            res.json({ error: true, message: "このユーザーは既に使われています。" });
        } else {
            res.json({ error: false, message: "" });
        }
    })
    .catch((error) => {
        res.status(404);
        res.json(error);
    });
};
