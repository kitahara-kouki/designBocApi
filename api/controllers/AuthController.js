const Models = require('../models/models');
const bcrypt = require('bcrypt');

exports.login = function(req, res) {
    console.log(req.body.username);
    Models.User.findOne({
        where: { username: req.body.username }
    }).then((user) => {
        if (user) {
            // パスワードが正しいか確認します。
            let passCheck = bcrypt.compareSync(req.body.password, user.password);
            if (passCheck) {
                res.json({ success: true, user: user });

                // // ユーザとパスワードの組が正しければトークンを発行します。
                // // パスワードはpayloadの中に含めないように注意してください。
                // const payload = {
                //     name : user.name
                // }
                // var token = jwt.sign(payload, app.get('secretKey'));
                //
                // // トークンを返します。
                // res.json({
                //     success: true,
                //     token: token
                // });
            } else {
                res.json({ success: false, message: 'パスワードに誤りがあります。' });
            }
        } else {
            res.json({ success: false, message: 'こちらのユーザーは存在しません。' });
        }

    }).catch((error) => {
        res.status(404);
        res.json(error);
    });;
};
