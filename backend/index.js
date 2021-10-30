const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");

// import mongodb connection
const connection = require("./config/db");

const typeDefs = require("./schemas/typeDefs");
const resolvers = require("./schemas/resolvers");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

connection();

(async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => console.log(`server listening at ${PORT}`));
})();