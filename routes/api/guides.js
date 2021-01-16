const router = require('express').Router();
const guidesCtrl = require('../../controllers/guides');

router.post('/', guidesCtrl.create); 

router.use(require('../../config/auth'));

router.get('/', checkAuth, guidesCtrl.getGuides);

router.delete('/:id', checkAuth, guidesCtrl.delete);

router.get('/:id', checkAuth, guidesCtrl.edit);

router.put('/:id', checkAuth, guidesCtrl.update);

function checkAuth(req, res, next) {
    if(req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;