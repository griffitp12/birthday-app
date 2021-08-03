const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Question {
    id: ID!
    question: String!
    answer: String!
  }

  type Query {
    allQuestions: [Question]
  }
`;

module.exports = typeDefs;
