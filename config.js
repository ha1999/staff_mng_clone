const dotenv = require('dotenv');
dotenv.config();
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};
const dev = process.env.NODE_ENV !== 'production';
const MONGO_URL = dev ? process.env.MONGO_URL_TEST : process.env.MONGO_URL;
const PORT = process.env.PORT ? process.env.PORT : 5000
module.exports = {
  PORT,
  MONGO_URL,
  options
}