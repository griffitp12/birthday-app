const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type DefaultQuestion {
    id: ID!
    question: String!
    birthday: Int!
  }

  type Query {
    allDefaultQuestions: [DefaultQuestion]
  }
`;

module.exports = typeDefs;
