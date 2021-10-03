const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.listen(3000, (err) => {
  console.info(`Server running on port ${3000}...`);
});
