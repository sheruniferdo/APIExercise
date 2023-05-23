const express = require('express');

const app = express();
const taskRoute = require('./app/routes/task.routes.js');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

taskRoute(app);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
