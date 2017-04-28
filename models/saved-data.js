var keystone = require('keystone'),
    Types = keystone.Field.Types;

var newDataModel = new keystone.List('SavedData', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
    defaultSort: '-createdAt'
});

newDataModel.add({
    title: { type: String, required: true },
    ownerEmail: { type: String, required: true, default: '' },
    body: { type: String, required: true, default: '' }
});

newDataModel.defaultColumns = 'title, body';

newDataModel.register();
