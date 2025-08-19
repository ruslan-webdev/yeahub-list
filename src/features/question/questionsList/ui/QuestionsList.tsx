import { useState } from "react";

import styles from "./QuestionsList.module.css";
import { QuestionItem } from "@/entities/question/questionItem";
import { useGetQuestionsQuery } from "../api/questionsListApi";
import Pagination from "./Pagination/Pagination";
import { DEFAULT_PAGE, limit } from "../model/config";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";

function QuestionsList() {
  const [page, setPage] = useState(DEFAULT_PAGE);
  const { title, specialization, rate, skills, complexity } = useAppSelector(state => state.filters);
  const { data, isLoading, error } = useGetQuestionsQuery({
    page,
    limit,
    title,
    specialization,
    rate,
    skills,
    complexity
  });

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Error, change form later</p>;

  const questions = data.data || [];
  const totalPages = data.total ? Math.ceil(data.total / limit) : 0;

  return (
    <div className={styles.container}>
      {questions.map(question => (
        <QuestionItem
          key={question.id}
          id={question.id}
          title={question.title}
          complexity={question.complexity}
          rate={question.rate}
          shortAnswer={question.shortAnswer}
        />
      ))}
      <div className={styles.paginationWrapper}>
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>
    </div>
  );
}

export default QuestionsList;
