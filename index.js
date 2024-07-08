const express = require("express");
const app = express();
const session = require('express-session');
const path = require("path");
const route = require('./Routes/routing')

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'keyboard cat',
    cookie: { }
}));


app.use(express.json())

// routes
app.use('/',route)

app.listen(4000, () => {
    console.log("Server running: http://localhost:4000/");
});
