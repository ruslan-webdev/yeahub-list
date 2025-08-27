import styles from "./QuestionsPage.module.css";
import { QuestionsFilters } from "@/widgets/question/questionsFilters";
import { QuestionsList } from "@/widgets/question/questionsList";

function QuestionsPage() {
  return (
    <div className={styles.wrapper}>
      <QuestionsList />
      <QuestionsFilters />
    </div>
  );
}

export default QuestionsPage;
