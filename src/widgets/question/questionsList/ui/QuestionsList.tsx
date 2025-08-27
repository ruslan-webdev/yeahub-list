import styles from "./QuestionsList.module.css";
import { useGetQuestionsQuery } from "@/entities/question/questionsList";
import { QuestionItem } from "@/entities/question/questionItem";
import Pagination from "@/shared/ui/pagination/Pagination";
import { useState } from "react";
import { DEFAULT_PAGE, limit } from "../model/config";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";

function QuestionsList() {
  const { title, specialization, skills, rate } = useAppSelector(state => state.filters);
  const [page, setPage] = useState(DEFAULT_PAGE);
  const { data: questions, isLoading, error } = useGetQuestionsQuery({ page, limit, title, specialization, skills, rate });

  if (isLoading) return <div>Loading...</div>;
  if (!questions || error) return <div>Error! Try again later.</div>;

  const totalPages = questions.total ? Math.ceil(questions.total / limit) : 0;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Вопросы React, JavaScript</h2>
      {questions.data.map(question => (
        <QuestionItem
          key={question.id}
          id={question.id}
          title={question.title}
          rate={question.rate}
          complexity={question.complexity}
          shortAnswer={question.shortAnswer}
        />
      ))}
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}

export default QuestionsList;
