const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
