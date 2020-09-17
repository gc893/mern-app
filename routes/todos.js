var express = require('express');
var router = express.Router();
const todosCtrl = require('../controllers/puppies');

router.get('/todos', todosCtrl.index);
router.get('/todos/:id', todosCtrl.show);
router.post('/todos', todosCtrl.create);
router.put('/todos/:id', todosCtrl.update);
router.delete('/todos/:id', todosCtrl.delete)

module.exports = router;