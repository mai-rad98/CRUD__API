const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8000;

//dummy data
let students = [
  { id: 1, name: 'John', lastname: 'Jonnie', age: 20 },
  { id: 2, name: 'May', lastname: 'Jon', age: 20 },
  { id: 3, name: 'June', lastname: 'May', age: 20 },
  { id: 4, name: 'Rati', lastname: 'Doe', age: 20 }
];

app.use(bodyParser.json());

//route handles

//Get all students
app.get('/student', (req, res) => {
  res.json(students);
});

// get a student using a specific id
app.get('/student/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find((student) => student.id === id);
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ error: 'Student not found' });
  }
});

//Post ,create a new student
app.post('/students', (req, res) => {
  const { name, lastname, age } = req.body;
  const id = students.length + 1;
  const newStudent = { name, lastname, age };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
