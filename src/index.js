const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;
const route = require('./routes');

// img static file
app.use(express.static(path.join(__dirname, 'public')));

//
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

// HTTP checker
app.use(morgan('combined'));

// Template engine setup
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
