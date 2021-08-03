import React from "react";
import { View, Text } from "react-native";
import { gql, useQuery } from "@apollo/client";

import Colors from "../constants/Colors";

import Card from "../components/Card";
import Loading from "./Loading";

const GET_QUESTIONS = gql`
  {
    allQuestions {
      question
      answer
    }
  }
`;

const QuestionsDash = (props) => {
  const { data, loading, error } = useQuery(GET_QUESTIONS);

  console.log(error);

  if (loading) {
    return <Loading />;
  }

  return (
    <View>
      <Card question="nothing" />
    </View>
  );
};

export default QuestionsDash;
