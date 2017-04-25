/**
 * Created by dim on 25.4.17.
 */

var keystone = require('keystone');

exposts = module.exports = function (req, res) {

	var view = new keystone.View(req, res);

	var locals = res.locals;

	// Set locals
	locals.my_variable = 'my-var';

	// Load Products
	view.query('posts', keystone.list('Post').model.find());

	// Render View
	view.render('posts');

};

