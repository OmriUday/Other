import quizTitle from "./quizTitle.components";
import quesTion from "./question.components";
const Quiz = ({ title, q1, q2, q1Type, q2Type, q1Value, q2Value }) => {
  return (
    <div>
      <quizTitle text={title} />
      <question title={q1} inputType={q1Type} inputValue={q1Value} />
      <question title={q2} inputType={q2Type} inputValue={q2Value} />
    </div>
  );
};
export default Quiz;