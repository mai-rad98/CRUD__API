const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8000;

//dummy data
let students = [
  { id: 1, name: 'John', lastname: 'Jonnie', age: 20, class: '1A' },
  { id: 1, name: 'May', lastname: 'Jon', age: 20, class: '1A' },
  { id: 1, name: 'June', lastname: 'May', age: 20, class: '1A' },
  { id: 1, name: 'Rati', lastname: 'Doe', age: 20, class: '1A' }
];

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`, students);
});
