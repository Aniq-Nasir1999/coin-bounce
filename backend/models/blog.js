const mongoose = require('mongoose');

const {Schema} = mongoose;

const blogschema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    photopath: {type: String, required: true},
    author: {type: mongoose.SchemaTypes.ObjectId, ref: 'Users'}
},

    {timestamps: true}
);

module.exports = mongoose.model('Blog', blogschema, 'blogs');