module.exports = function(app) {
    const auth = require('./controllers/AuthController');
    const user = require('./controllers/UsersController');
    const design = require('./controllers/DesignsController');
    const category = require('./controllers/CategoriesController');
    const favorite = require('./controllers/FavoritesController');

    app.route('/login').post(auth.login);

    app.route('/users').get(user.index).post(user.create);
    app.route('/users/:id').get(user.show).put(user.update).delete(user.delete);
    app.route('/users/check').post(user.check);

    app.route('/categories').get(category.index);
    app.route('/designs').get(design.index).post(design.register);
    app.route('/designs/:id').get(design.show).delete(design.delete);

    app.route('/favorites').post(favorite.create).delete(favorite.delete);
};
