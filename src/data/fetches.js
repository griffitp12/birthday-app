import axios from "axios";

export default Fetches = {
  fetchQuestions() {
    try {
      axios({
        method: "POST",
        url: "/graphql",
        data: {
          query: `
                  {
                  allQuestions(){
                    id
                    question
                    answer
                   }
                  }`,
        },
      }).then((response) => {
        console.log("here is the response:", response);
      });
    } catch (error) {
      console.log("couldn't fetch questions:", error);
      return;
    }
  },
};
