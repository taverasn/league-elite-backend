const User = require('../models/user');
const SECRET = process.env.SECRET;
const jwt = require('jsonwebtoken');

module.exports = {
    signup,
    login
}


async function signup(req, res) {
    try {
        const user = await User.create(req.body);

        const token = createJWT(user);

        res.json({ token })

    } catch (error) {
        
        res.status(400).json({ msg: 'bad request' });
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if(!user) return res.status(401).json({ err: 'bad credentials' });
        
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(isMatch) {
                const token = createJWT(user);
                res.json({ token });
            } else {
                res.status(400).json({ err: 'bad request' });
            }
        });

    } catch (error) {

    }
}

// helper function for generating JWTs
function createJWT(user) {
    return jwt.sign({ user }, SECRET, { expiresIn: '24h' })
}