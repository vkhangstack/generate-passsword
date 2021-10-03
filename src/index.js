const express = require('express');
const app = express();
const cors = require('cors');

app.disable('x-powered-by');
app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);
app.use(express.json());

app.listen(3000, (error) => {
  if (error) throw error;
  console.info(`Server running on port ${3000}...`);
});
