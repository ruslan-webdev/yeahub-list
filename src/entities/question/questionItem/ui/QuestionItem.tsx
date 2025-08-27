import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./QuestionItem.module.css";
import Separator from "@/shared/ui/separator/Separator";
import MetaInfoBlock from "@/shared/ui/metaInfoBlock/MetaInfoBlock";
import { DEFAULT_BOOLEAN_VALUE } from "@/shared/config/constants";
import arrowToggleBottom from "/icons/arrow-toggle-b.svg";
import arrowToggleTop from "/icons/arrow-toggle-t.svg";
import type { IQuestion } from "../model/types";
import ButtonContinue from "@/shared/ui/buttonContinue/ButtonContinue";

function QuestionItem({ id, title, rate, complexity, shortAnswer }: IQuestion) {
  const navigate = useNavigate();
  const [showAnswer, setShowAnswer] = useState(DEFAULT_BOOLEAN_VALUE);

  function handleToggleShowAnswer() {
    setShowAnswer(!showAnswer);
  }

  function handleClickContinue(id: number | undefined) {
    navigate(`/questions/public-questions/${id}`);
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.dot}></div>
        <p className={styles.title}>{title}</p>
        <img
          className={styles.arrow}
          onClick={handleToggleShowAnswer}
          src={showAnswer ? arrowToggleTop : arrowToggleBottom}
          alt="toggle"
        />
      </div>
      {showAnswer && (
        <div className={styles.answer}>
          <div className={styles.metaBlocks}>
            <MetaInfoBlock info="Рейтинг" value={rate} />
            <MetaInfoBlock info="Сложность" value={complexity} />
          </div>
          <p className={styles.answerText} dangerouslySetInnerHTML={{ __html: shortAnswer }}></p>
          <div className={styles.buttonContainer}>
            <ButtonContinue onClick={() => handleClickContinue(id)}/>
          </div>
        </div>
      )}
      <Separator />
    </div>
  );
}

export default QuestionItem;
