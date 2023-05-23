const Task = require('../models/task.model.js');

taskList = [];

// Retrieve all tasks
exports.findAll = (req, res) => {
    res.json(taskList);
};

// Create and Save a new Task
exports.create = (req, res) => {

    const title = req.body.title;
    const description = req.body.description;

    const existingTask = taskList.find(task => task.title === title);
    if (existingTask) {
        return res.status(400).send({ 
            message: "Task title already exists!" 
        });
    }

    const task = new Task({
        title,
        description
    });

    taskList.push(task);
    res.send(task);
};

// Update Task
exports.update = (req, res) => {
    const taskId = req.params.taskId;

    // Find the task in the array
    const taskToUpdate = taskList.find(task => task.id === taskId);

    if (!taskToUpdate) {
        return res.status(404).send({
            message: "Task not found with id " + taskId
        });
    }
    if(req.body.title){
        taskToUpdate.title = req.body.title;
    }
    if(req.body.description){
        taskToUpdate.description = req.body.description;
    }
    res.send(taskToUpdate);
}

// Find task
exports.findOne = (req, res) => {
    const taskId = req.params.taskId;

    // Find the task in the array
    const task = taskList.find(task => task.id === taskId);

    if (!task) {
        return res.status(404).send({
            message: "Task not found with id " + taskId
        });
    }

    res.send(task);
};

// Delete a task
exports.delete = (req, res) => {
    const taskId = req.params.taskId;

    const taskIndex = taskList.findIndex(task => task.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).send({
            message: "Task not found with id " + taskId
        });
    }

    const removedTask = taskList.splice(taskIndex, 1)[0];

    res.send({ message: "Task deleted successfully!" });
};