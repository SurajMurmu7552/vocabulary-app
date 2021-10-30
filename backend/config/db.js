const mongoose = require("mongoose");

const uri =
  "mongodb+srv://user1:user1@cluster0.njgll.mongodb.net/vocabularyApp?retryWrites=true&w=majority";

const connection = async () => {
  try {
    const conn = await mongoose.connect(uri);
    console.log(`connected to database ${conn.connection.name}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connection;
