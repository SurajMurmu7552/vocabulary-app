const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Example {
    definitions: [String]
    text: String
  }

  type Sense {
    definitions: [String]
    etymologies: [String]
    examples: [Example]
    shortDefinitions: [String]
  }

  type Entry {
    etymologies: [String]
    senses: [Sense]
  }
  type Category {
    id: String
    text: String
  }

  type LexicalEntry {
    lexicalCategory: Category
    text: String
    entries: [Entry]
  }

  type Result {
    id: String
    language: String
    word: String
    lexicalEntries: [LexicalEntry]
  }

  type Data {
    results: [Result]
  }

  #Queries
  type Query {
    getAllData: [Data]
    getSingleData(id: String): Data
  }

  #Mutations

  type Mutation {
    addData(id: String): Data
  }
`;

module.exports = typeDefs;
