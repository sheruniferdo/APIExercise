const express = require('express');

const app = express();
const taskRouter = require('./app/routes/task.routes.js');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Using the router as a middleware
app.use('/tasks', taskRouter);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
