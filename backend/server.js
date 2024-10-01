const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

// Middleware
app.use(cors());
app.use('/public', express.static(path.join(__dirname, 'public')));

// Course data
const courses = [
  {
    image: 'for-react.jpg',
    title: "React Course",
    description: "This is a React course, 52 hours of exclusive content + projects with src codes",
    price: 100,
  },
  {
    image: 'node.jpg',
    title: "Node Course",
    description: "This is a Node.js course, 52 hours of exclusive content + projects with src codes",
    price: 200,
  },
  {
    image: 'mern.jpg',
    title: "MERN Course",
    description: "This is a MERN course, 52 hours of exclusive content + projects with src codes",
    price: 300,
  },
  {
    image: 'mongo.jpg',
    title: "MongoDB Course",
    description: "This is a MongoDB course, 52 hours of exclusive content + projects with src codes",
    price: 400,
  },
];

// API endpoint to fetch courses
app.get('/api/courses', (req, res) => {
  res.json(courses);
});

// Export the app for Vercel to handle
module.exports = app;
