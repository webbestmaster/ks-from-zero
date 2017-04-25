var keystone = require('keystone');
keystone.init({

    'name': 'My Project',

    'favicon': 'public/favicon.ico',
    'less': 'public',
    'static': ['public'],

    'views': 'templates/views',
    'view engine': 'jade',

    'auto update': true,
    'mongo': 'mongodb://localhost/',

    'session': true,
    'auth': true,
    'user model': 'User',
    'cookie secret': '(your secret here) trytrurifhtdfsdahfkjdshfksafsdhlfksajdf',

    // my settings

    'cloudinary config': 'cloudinary://834913238274823:sqddStH24jdfde130YywaTjX0x4@du7nae0ez'

});

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();
