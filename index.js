const express = require('express');
const server = express();

server.use(express.json());

const courses = ['FullStack', 'Back-End', 'Front-End'];

server.get('/courses/:index', (req, res) => {
    const { index } = req.params;

    return res.json(courses[index]);
});

server.get('/courses', (req, res) => {
    return res.json(courses);
});

server.post('/courses', (req, res) => {
    const { name } = req.body;

    courses.push(name);

    return res.json(courses);
});

server.put('/courses/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    courses[index] = name;

    return res.json(courses);
});

server.delete('/courses/:index', (req, res) => {
    const { index } = req.params;

    courses.splice(index, 1);

    return res.json({ message : "The course has been deleted"});
});

server.listen(3000);