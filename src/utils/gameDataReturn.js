export default (questionTxt, questionValue, correctAnswer) => {
  const questionAndAnswer = {
    questionText: questionTxt,
    generatedValue: questionValue,
    answer: correctAnswer,
  };
  return questionAndAnswer;
};
