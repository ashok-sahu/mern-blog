require("dotenv").config();
const mongoose = require("mongoose");
const chalk = require('chalk')
const db = process.env.MONGO_URI;

const connect_DB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      dbName: "MERN_BLOG",
    });
    console.log(chalk.black.bold.bgGreen('database connection successful.'))
  } catch (err) {
    console.error(chalk.bgRedBright.bold.white(err.message));
    process.exit(1);
  }
};

module.exports = connect_DB;
