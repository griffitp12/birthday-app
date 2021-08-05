import React, { useEffect } from "react";
import { View, Button } from "react-native";
import { gql, useQuery } from "@apollo/client";

import Colors from "../constants/Colors";
import Queries from "../data/queries";

import CardTemplate from "../components/CardTemplate";
import QuestionCard from "../components/QuestionCard";
import Loading from "./Loading";

const GET_QUESTIONS = gql`
  {
    allQuestions {
      question
      answer
      id
    }
  }
`;

const QuestionsDash = (props) => {
  const answeredQuestions = [];
  const answeredQuestionsHandler = (data) => {
    answeredQuestions.push(data);
  };

  const { data, loading, error } = useQuery(GET_QUESTIONS);
  console.log(data, loading, error)
  if (loading) {
    return <Loading />;
  }

  return (
    <View>
      <Button title="submit answers" />
      {data.allQuestions.map((question) => (
        <QuestionCard
          key={question.id}
          question={question.question}
          handler={answeredQuestionsHandler}
        />
      ))}
    </View>
  );
};

export default QuestionsDash;
