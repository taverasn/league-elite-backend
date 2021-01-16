const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 6;


const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
}, { timestamps: true });

userSchema.set('toJSON', {
    transform: function(doc, ret) {
        delete ret.password
        return ret;
    }
})

userSchema.pre('save', function(next) {
    const user = this;
    if(!user.isModified("password")) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
        if(err) return next(err);
        user.password = hash;
        next();
    })
});

userSchema.methods.comparePassword = function(tryPassword, callback) {
    bcrypt.compare(tryPassword, this.password, callback)
}

module.exports = mongoose.model('User', userSchema);