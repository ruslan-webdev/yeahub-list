import type { IQuestionTitleProps } from "../model/types";
import styles from "./QuestionTitle.module.css";

function QuestionTitle({ title, description }: IQuestionTitleProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default QuestionTitle;