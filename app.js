const express = require('express');
const morgan = require('morgan'); 
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')
//express app
const app = express();

//mongodb
const dbURI = 'mongodb+srv://ahmadelmehdawe:test1234@node-course.hp7qg5l.mongodb.net/node';
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));


//register view engine
app.set('view engine', 'ejs');

// //listen to requests
// app.listen(3000);

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


//main routes
app.get('/', (req, res) => {
    res.redirect('/blogs');   
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

//blogs routes
app.use('/blogs', blogRoutes)

//404
app.use((req, res) => {
    res.status(404).render('404', {title: '404 Not found'});
});