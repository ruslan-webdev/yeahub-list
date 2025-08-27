import styles from "./AnswerBlock.module.css";

interface IAnswerBlockProps {
  typeAnswer: string;
  answer: string;
}

function AnswerBlock({ typeAnswer, answer }: IAnswerBlockProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{typeAnswer}</h3>
      <p className={styles.answer} dangerouslySetInnerHTML={{ __html: answer }}></p>
    </div>
  );
}

export default AnswerBlock;