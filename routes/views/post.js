/**
 * Created by dim on 25.4.17.
 */

var keystone = require('keystone');

exposts = module.exports = function (req, res) {

    var view = new keystone.View(req, res);

    var locals = res.locals;

    locals.data = {
        post: null
    };

    view.on('init', function (next) {

        var q = keystone.list('Post').model.findOne({
            slug: req.params.postId
        });

        q.exec(function (err, result) {
            locals.data.post = result;
            next(err);
        });

    });

    // Render View
    view.render('post');

};

