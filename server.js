const express = require('express');
const path = require('path');
const routes = require('./server/dishes-routes');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use('/', routes);


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
