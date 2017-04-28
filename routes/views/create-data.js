var keystone = require('keystone');
var SavedData = keystone.list('SavedData');

exposts = module.exports = function (req, res) {

    var view = new keystone.View(req, res);

    var locals = res.locals;

    var title = req.params.title;
    var body = req.params.body;

    view.on('init', function (next) {

        new SavedData.model({
            title: title,
            ownerEmail: req.user.get('email'),
            body: body
        }).save(function () {
            locals.data = {
                title: title,
                ownerEmail: req.user.get('email'),
                body: body
            };
            next();
        });

    });

    view.render('json');

};

