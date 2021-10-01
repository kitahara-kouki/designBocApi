const Models = require('../models/models');

exports.index = function(req, res) {
    const options = {
        attributes: ['id', 'title', 'desc', 'html', 'css'],
        include: [
            {
                attributes: ['icon', 'username'],
                model: Models.User,
                required: true
            },
            {
                attributes: ['id'],
                model: Models.Favorite,
                required: false,
                where: {
                    user_id: req.query['user_id']
                }
            }
        ],
        where: {},
    };

    // リクエストで address パラメータを指定されていれば、絞り込み検索のためのオプションとして追加する
    if(req.query['category']) {
        options.where['category_id'] = req.query['category'];
    }
    if(req.query['title']) {
        options.where['title'] = req.query['title'];
    }

    Models.Design.findAll(options)
    .then((result) => {
        // 200:OK と、JSON 形式の結果データ dataValues を返す
        res.status(200);
        res.json(result);
    })
    .catch((error) => {
        console.log(error);
        res.status(404);
        res.json(error);
    });
};

exports.show = function(req, res) {
    Models.Design.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: Models.Category,
            required: true,
        }
    }).then(result => {
        res.status(200);
        res.json(result);
    })
    .catch((error) => {
        res.status(404);
        res.json(error);
    });
};

exports.register = function(req, res) {
    if(req.body.id == undefined) {
        Models.Design.create(req.body)
        .then(design => {
            res.status(200);
            res.json(design);
        })
        .catch((error) => {
            res.status(404);
            res.json(error);
        });
    } else {
        Models.Design.update(
            {
                title: req.body.title,
                desc: req.body.desc,
                html: req.body.html,
                css: req.body.css,
            },
            {
                where: { id: req.body.id }
            }
        ).then(result => {
            res.status(200);
            res.json(result);
        })
        .catch((error) => {
            res.status(404);
            res.json(error);
        });
    }
};

// 特定のタスクを削除する。
exports.delete = function(req, res) {
    Models.Design.destroy({
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
