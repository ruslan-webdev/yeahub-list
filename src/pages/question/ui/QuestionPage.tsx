import { useNavigate, useParams } from "react-router-dom";

import styles from "./QuestionPage.module.css";
import { useGetQuestionQuery } from "@/entities/question/questionsList/api/questionsListApi";
import { QuestionTitle } from "@/widgets/question/questionTitle";
import AnswerBlock from "@/shared/ui/answerBlock/AnswerBlock";
import { QuestionInfo } from "@/widgets/question/questionInfo";
import ButtonBack from "@/shared/ui/buttonBack/ButtonBack";

function QuestionPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: question, isLoading, error } = useGetQuestionQuery({ id });

  function handleClickBack() {
    navigate(-1);
  }

  if (isLoading) return <div>Loading...</div>;
  if (!question || error) return <div>Error! Try again later.</div>;

  return (
    <>
      <ButtonBack onClick={handleClickBack} />
      <div className={styles.wrapper}>
        <div className={styles.answers}>
          <QuestionTitle title={question.title} description={question.description} />
          <AnswerBlock typeAnswer="Краткий ответ" answer={question.shortAnswer} />
          <AnswerBlock typeAnswer="Развернутый ответ" answer={question.longAnswer} />
        </div>
        <QuestionInfo
          rate={question.rate}
          complexity={question.complexity}
          questionSkills={question.questionSkills}
          keywords={question.keywords}
        />
      </div>
    </>
  );
}

export default QuestionPage;
