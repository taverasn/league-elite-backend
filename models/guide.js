const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guideSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum:['General', 'Lane', 'Champion'],
    },
    role: {
        type: String,
        enum: ['Top', 'Jungle', 'Mid', 'Bot', 'Sup'],
    },
    champion: String,
    items: String,
    runes: String,
    abilities: String,
}, {
    timestamps: true
});

guideSchema.pre('save', function (next) {
    this.name;
    next();
});

module.exports = mongoose.model('Guide', guideSchema);