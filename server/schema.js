const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Question {
    id: Int!
    question: String!
    answer: String!
  }

  type Query {
    allQuestions: [Question]
  }
`;

module.exports = typeDefs;
