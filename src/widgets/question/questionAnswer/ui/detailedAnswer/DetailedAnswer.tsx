import styles from "./DetailedAnswer.module.css";
import type { DetailedAnswerProps } from "../../model/types";

function DetailedAnswer({ longAnswer }: DetailedAnswerProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Развёрнутый ответ</h3>
      <p className={styles.answer} dangerouslySetInnerHTML={{ __html: longAnswer }}></p>
    </div>
  );
}

export default DetailedAnswer;