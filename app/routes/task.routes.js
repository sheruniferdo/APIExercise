const tasks = require('../controllers/task.controller.js');
const { validateTask, validateUpdateTask } = require('../validators/taskValidator.js');

module.exports = function(app) {
  app.post('/tasks', validateTask, tasks.create);
  app.get('/tasks', tasks.findAll);
  app.get('/tasks/:taskId', tasks.findOne);
  app.put('/tasks/:taskId', validateUpdateTask, tasks.update);
  app.delete('/tasks/:taskId', tasks.delete);
};
