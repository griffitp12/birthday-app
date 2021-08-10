import  { gql } from "apollo-server-express";

export default typeDefs = gql`
  scalar Date

  type User {
    user_id: ID!
    username: String!
    email: String!
  }

  type Child {
    child_id: ID!
    name: String!
    birthday: Date!
    pronouns: String!
    parent_id: ID!
  }

  type Capsule {
    capsule_id: ID!
    capsule_bd: Int!
    child_id: ID!
  }

  type Question {
    question_id: ID!
    question: String!
    answer: String!
    capsule_id: ID!
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
