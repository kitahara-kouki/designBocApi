const Models = require('../models/models');

exports.index = function(req, res) {
    const options = {
        where: {
            parent_id: null,
        },
        include: [{
            model: Models.Category,
            required: false
        }]
    };

    Models.Category.findAll(options)
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
