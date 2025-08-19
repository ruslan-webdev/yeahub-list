import styles from "./QuestionsPage.module.css";
import { QuestionBlock } from "@/widgets/question/questionBlock";
import QuestionFilters from "@/widgets/question/questionFilters/ui/QuestionFilters";

function QuestionsPage() {
  return (
    <div className={styles.container}>
      <QuestionBlock />
      <QuestionFilters />
    </div>
  );
}

export default QuestionsPage;
