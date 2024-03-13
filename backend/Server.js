const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
  console.log('hellos');
});
