const Models = require('../models/models');

exports.create = function(req, res) {
    Models.Favorite.create(req.body)
    .then(result => {
        res.status(200);
        res.json(result);
    })
    .catch((error) => {
        console.log(error);
        res.status(404);
        res.json(error);
    });
};

// 特定のタスクを削除する。
exports.delete = function(req, res) {
    Models.Favorite.destroy({
        where: {
            user_id: req.query["user_id"],
            design_id: req.query["design_id"]
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
