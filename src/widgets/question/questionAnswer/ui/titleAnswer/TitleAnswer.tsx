import styles from "./TitleAnswer.module.css";
import type { TitleAnswerProps } from "../../model/types";

function TitleAnswer({ title, description }: TitleAnswerProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </div>
  );
}

export default TitleAnswer;