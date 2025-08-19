import styles from "./ShortAnswer.module.css";
import type { ShortAnswerProps } from "../../model/types";

function ShortAnswer({ shortAnswer }: ShortAnswerProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Краткий ответ</h2>
      <p className={styles.answer} dangerouslySetInnerHTML={{ __html: shortAnswer }}></p>
    </div>
  );
}

export default ShortAnswer;