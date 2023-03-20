const express = require('express');
require('dotenv').config();

// Create express server
const app = express();

// Public directory
app.use(express.static('public'));

// Read and parse body
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
// TODO: CRUD: Events

// Listen petitions
app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
