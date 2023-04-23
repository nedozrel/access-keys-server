const express = require('express');
const mongoose = require('mongoose');
const keyRouter = require('./routers/KeysRouter');
require('dotenv').config();

const APP_PORT = process.env.APP_PORT || 80;
const {DB_CONNECTION_STRING} = process.env;
const CONNECTION_OPTIONS = {
  maxPoolSize: 3,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


app = express();
app.use(express.json());
app.use('/api', keyRouter);

const startApp = async () => {
  await mongoose.connect(DB_CONNECTION_STRING, CONNECTION_OPTIONS);
  const server = app.listen(APP_PORT, () => console.log(`Example app listening on port ${APP_PORT}`));
};

startApp();
