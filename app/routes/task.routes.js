const express = require('express');
const router = express.Router();
const tasks = require('../controllers/task.controller.js');
const { validateTask, validateUpdateTask } = require('../validators/taskValidator.js');

router.post('/', validateTask, tasks.create);
router.get('/', tasks.findAll);
router.get('/:taskId', tasks.findOne);
router.put('/:taskId', validateUpdateTask, tasks.update);
router.delete('/:taskId', tasks.delete);

module.exports = router;




