var express = require('express');
var router = express.Router();
const todosCtrl = require('../controllers/todos');

// Below auth router is protected
router.use(require('../config/auth'));
router.get('/', todosCtrl.index);
router.get('/:id', todosCtrl.getOne);
router.post('/', todosCtrl.create);
router.put('/todos/:id', checkAuth, todosCtrl.update);
router.delete('/todos/:id', checkAuth, todosCtrl.delete);

function checkAuth(req, res, next) {
	if (req.user) return next();
	return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;
