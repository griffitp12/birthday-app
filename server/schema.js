const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    user_id: ID!
    username: String!
    email: String!
  }

  type child {
    
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
