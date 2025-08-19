import styles from "./QuestionBlock.module.css";
import { QuestionsList } from "@/features/question/questionsList";
import Separator from "@/shared/ui/Separator/Separator";

function QuestionBlock() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Вопросы React, JavaScript</h2>
      <Separator />
      <QuestionsList />
    </div>
  );
}

export default QuestionBlock;