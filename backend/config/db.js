const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

const connection = async () => {
  try {
    const conn = await mongoose.connect(uri);
    console.log(`connected to database ${conn.connection.name}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connection;
