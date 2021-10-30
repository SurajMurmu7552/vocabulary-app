const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { ApolloServer } = require("apollo-server-express");
dotenv.config();

// import mongodb connection
const connection = require("./config/db");

//import schemas
const typeDefs = require("./schemas/typeDefs");
const resolvers = require("./schemas/resolvers");

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

//database connection
connection();

(async () => {
  //apollo server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => console.log(`server listening at ${PORT}`));
})();
