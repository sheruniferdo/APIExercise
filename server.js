const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

require('./app/routes/task.routes.js')(app);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
