const express = require('express')
const app = express();
const port = 5000;
const Courses = require('./data/Courses.json')
const cors = require('cors');
app.use(cors());
const Blogs = require('./data/Blog.json');

app.get('/', (req, res) => {
    res.send('information technology server is running...')
})
app.get('/courses', (req, res) => {
    res.send(Courses);
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedItem = Courses.find(course => course.id === id);
    res.send(selectedItem);
})
app.get('/course-details/:id', (req, res) => {
    const id = req.params.id;
    const selectedItem = Courses.find(course => course.id === id);
    res.send(selectedItem);
})
app.get('/blog', (req, res) => {
    res.send(Blogs);
})


app.listen(port, () => {
    console.log('information technology server is running')
})